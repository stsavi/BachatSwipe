"""
BachatSwipe Local Development Server
====================================
Run this script to test the application locally in your browser.

Usage:
    python run_local_server.py

Features:
    - Multi-threaded server for concurrent connections
    - Automatic browser opening
    - Network URL display for mobile testing
    - Clean logging
"""
import http.server
import socketserver
import webbrowser
import socket
import os
import sys

PORT = 8080

def get_local_ip():
    """Get the local IP address for network access"""
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        # Doesn't need to be reachable
        s.connect(('10.255.255.255', 1))
        IP = s.getsockname()[0]
    except Exception:
        IP = '127.0.0.1'
    finally:
        s.close()
    return IP

class ThreadedHTTPServer(socketserver.ThreadingMixIn, socketserver.TCPServer):
    """Multi-threaded server to handle concurrent connections"""
    allow_reuse_address = True

class Handler(http.server.SimpleHTTPRequestHandler):
    """Custom handler with cleaner logging"""
    def log_message(self, format, *args):
        # Only log actual requests, not every resource
        if not any(x in args[0] for x in ['.css', '.js', '.jpg', '.png', '.ico']):
            print(f"[{self.address_string()}] {format % args}")

def main():
    local_ip = get_local_ip()
    
    print("=" * 70)
    print("🚀 BachatSwipe - Local Development Server")
    print("=" * 70)
    print(f"📍 Local URL:   http://localhost:{PORT}/index.html")
    print(f"📱 Network URL: http://{local_ip}:{PORT}/index.html")
    print("=" * 70)
    print("💡 Tips:")
    print("   • Use Local URL for desktop testing")
    print("   • Use Network URL for mobile testing (same WiFi)")
    print("   • For PWA installation on mobile, use ngrok for HTTPS")
    print("=" * 70)
    print("Press Ctrl+C to stop the server\n")
    
    # Open browser automatically
    try:
        webbrowser.open(f"http://localhost:{PORT}/index.html")
        print("✓ Browser opened automatically\n")
    except:
        print("⚠ Could not open browser automatically\n")
    
    # Start server
    try:
        with ThreadedHTTPServer(("", PORT), Handler) as httpd:
            print(f"✓ Server running on port {PORT}...\n")
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n\n✓ Server stopped gracefully")
        sys.exit(0)
    except OSError as e:
        if "address already in use" in str(e).lower():
            print(f"\n❌ Error: Port {PORT} is already in use")
            print(f"   Try closing other applications or use a different port\n")
        else:
            print(f"\n❌ Error: {e}\n")
        sys.exit(1)

if __name__ == "__main__":
    main()
