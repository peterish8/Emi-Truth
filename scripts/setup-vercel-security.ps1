# Run from repo root while logged into the quotes2business-8728 Vercel team.
#   vercel login
#   vercel link
#   .\scripts\setup-vercel-security.ps1

$ErrorActionPreference = "Stop"

Write-Host "Linking project (skip if already linked)..."
vercel link --yes 2>$null

Write-Host "Applying basic WAF custom rules (Hobby: up to 3)..."

# Log suspicious empty user-agents before enforcing anything stricter.
vercel firewall rules add "Log empty user agents" `
  --condition '{"type":"user_agent","op":"ex"}' `
  --action log `
  --yes 2>$null

# Soft rate limit for abusive bursts on the homepage.
vercel firewall rules add "Rate limit homepage bursts" `
  --condition '{"type":"path","op":"eq","value":"/"}' `
  --action rate_limit `
  --rate-limit-window 60 `
  --rate-limit-requests 120 `
  --rate-limit-keys ip `
  --rate-limit-action log `
  --yes 2>$null

Write-Host "Publishing firewall draft rules..."
vercel firewall publish --yes

Write-Host ""
Write-Host "Done. Still enable in the Vercel dashboard (one-time toggles):"
Write-Host "  Firewall -> Bot Management -> Bot Protection -> Challenge"
Write-Host "  Firewall -> Bot Management -> AI Bots -> Log (or Deny)"
Write-Host "  Analytics -> Enable"
Write-Host "  Speed Insights -> Enable"
Write-Host ""
Write-Host "Leave Attack Mode OFF unless you are under an active attack."