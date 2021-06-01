function consolecheck(){
	
	var isPlaystation4 = false;
	
	var ua = navigator.userAgent;
	var fwVersionp34 = ua.substring(ua.indexOf('5.0 (') + 19, ua.indexOf(") Apple"));
		
	
	switch (navigator.platform) {
		
		case "PlayStation 4":
			isPlaystation4 = true;
			break;
		
		default:
			alert("Vous n'\u00eates pas sur une console compatible!\n                                 .-----------.\n                               /  No Way! \\ \n                              |  *__    __* |\n                              | )/    \\   /    \\( |\n                              |/ \\__/   \\__/ \\|	\n                             /         /^\\         \\ \n                             \\__    '='     __/\n                                  |\\          /|\n                                  |\\ '*xx*' /|\n                                  \\ '*****' / \n                                   `-.__.-'\n\n                   >> Fermer le navigateur <<");
			
			window.stop();
			
			isPlaystation4 = false;
			break;
	}


	if (isPlaystation4) {
		switch (fwVersionp34) {
			
			case ps4fwCompat[0]:
			   
				alert("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t" + fwVersionp34 + " PS4 firmware detected !!\n\n Great : You can use the GoldHen payload to play your backup !!!");
				document.location.href="505/index.html"
			    break;

			case ps4fwCompat[1]:
			   
				alert("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t" + fwVersionp34 + " PS4 firmware detected !!\n\n Great : You can use the GoldHen payload to play your backup !!!");
				document.location.href="505/index.html"
			    break;
				
			case ps4fwCompat[2]:
			   alert("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t" + fwVersionp34 + " PS4 firmware detected !!\n\n Great : You can use the GoldHen payload to play your backup !!!");
			   document.location.href="672/index.html"
				break;
				
			case ps4fwCompat[3]:
			   alert("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t" + fwVersionp34 + " PS4 firmware detected !!\n\n Great : You can use the GoldHen payload to play your backup !!!");
			    document.location.href="702/index.html"
				break;

			case ps4fwCompat[4]:
			   
				alert("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t" + fwVersionp34 + " PS4 firmware detected !!\n\n Great : You can use the GoldHen payload to play your backup !!!");
				document.location.href="702/index.html"
			    break;
			
			case ps4fwCompat[5]:
			   alert("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t" + fwVersionp34 + " PS4 firmware detected !!\n\n Great : You can use the GoldHen payload to play your backup !!!");
			   document.location.href="755/index.html"
				break;
				
			case ps4fwCompat[6]:
			   alert("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t" + fwVersionp34 + " PS4 firmware detected !!\n\n Great : You can use the GoldHen payload to play your backup !!!");
			    document.location.href="755/index.html"
				break;
				
			case ps4fwCompat[7]:
			   alert("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t" + fwVersionp34 + " PS4 firmware detected !!\n\n Great : You can use the GoldHen payload to play your backup !!!");
			    document.location.href="755/index.html"
				break;
				
			default:
			   alert("\t\t\t\t\t\t\t\t\t\t\t\t\t Humm hummmm Go back please !\n\n Your PS4 firmware is " + fwVersionp34 + " and this is not the good section.");
				document.location.href=""
				break;
		}
	}

	
}
