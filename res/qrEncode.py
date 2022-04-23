import qrcode

url = "https://progettoaniene2a.github.io/ProgettoAniene" + input("URL dopo ./ProgettoAniene: ")
qr = qrcode.make( url )
filename = "./qr/" + input("Nome file (no estensione): ") + ".png"
if input("(y/n): ") == "y":
	qr.save( filename )