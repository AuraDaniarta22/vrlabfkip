$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:8080/")
$listener.Start()
Write-Host "Listening on http://localhost:8080/"
while ($listener.IsListening) {
    $context = $listener.GetContext()
    $response = $context.Response
    $request = $context.Request
    
    $localPath = [System.Uri]::UnescapeDataString($request.Url.LocalPath.TrimStart('/'))
    if ($localPath -eq "") { $localPath = "index.htm" }
    
    $filePath = Join-Path $PWD $localPath
    
    if (Test-Path $filePath -PathType Leaf) {
        try {
            $content = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentLength64 = $content.Length
            
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            if ($ext -eq ".htm" -or $ext -eq ".html") { $response.ContentType = "text/html" }
            elseif ($ext -eq ".js") { $response.ContentType = "application/javascript" }
            elseif ($ext -eq ".css") { $response.ContentType = "text/css" }
            elseif ($ext -eq ".jpg" -or $ext -eq ".jpeg") { $response.ContentType = "image/jpeg" }
            elseif ($ext -eq ".png") { $response.ContentType = "image/png" }
            elseif ($ext -eq ".json") { $response.ContentType = "application/json" }
            elseif ($ext -eq ".mp4") { $response.ContentType = "video/mp4" }
            
            $response.OutputStream.Write($content, 0, $content.Length)
        } catch {
            $response.StatusCode = 500
        }
    } else {
        $response.StatusCode = 404
    }
    $response.Close()
}
