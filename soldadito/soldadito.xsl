<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
			<head>
				<link rel="stylesheet" type="text/css" href="soldadito.css" />
			</head>
			<body>
				
				<h1><xsl:value-of select="cancion/titulo/."/></h1>
				<h3><xsl:value-of select="cancion/autor/."/></h3>

				<hr></hr>
				
				<div id="estrofa">
				<xsl:for-each select="cancion/letras/estrofa">
					<h2>Estrofa</h2>	
				<xsl:for-each select="verso"><p><xsl:value-of select="."/><br></br></p>
					</xsl:for-each>
					
					<br></br>
				</xsl:for-each>
			</div>
			</body>
		</html>
	</xsl:template>


</xsl:stylesheet>