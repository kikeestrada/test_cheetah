# Email Gulp Components Boilerplate

This is a Email Gulp Boilerplate developed by me to create project fron scratch and in this case i have a style guide with many UI components created by me

for this i use:
* ```HTML (htmlhint)```
* ```CSS (sass)```

Instructions: 
* ```gulp dev``` for develop environment
* ```npm run deploy``` to publish the site in gh pages

## gh-pages link: https://kikeestrada.github.io/email_gulp_boilerplate/

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<style type="text/css">
		_include('./styles.css')
	</style>
</head>
<body style="padding:0 !important">	
	<table width="100%" border="0" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff">
		<tr>
			<td valign="top">
				_include('./component.html')
			</td>
		</tr>
	</table>
</body>	
</html>
			
```

