<<<<<<< HEAD
#include <stdio.h>
#include <stdlib.h>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */

int main(int argc, char *argv[]) {
	char kytu;
	printf("Nhap vao mot ky tu : ");
	scanf("%c", &kytu);
	
	if(kytu >= 'a' && kytu <= 'z'){
	  printf("do la ky tu thuong  %c ");
	}  
	else if (kytu >= 'A'&& kytu <= 'Z'){
	  printf ("do la ky tu in hoa  %c ");
	}  
	else if (kytu >= '1' && kytu <= '9'){
	  printf("do la so");
	}  
	else{
	  printf("ky tu khong nam trong bang Allphabet");
	} 
	return 0;
}
=======
#include <stdio.h>
#include <stdlib.h>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */

int main(int argc, char *argv[]) {
	char kytu;
	printf("Nhap vao mot ky tu : ");
	scanf("%c", &kytu);
	
	if(kytu >= 'a' && kytu <= 'z'){
	  printf("do la ky tu thuong  %c ");
	}  
	else if (kytu >= 'A'&& kytu <= 'Z'){
	  printf ("do la ky tu in hoa  %c ");
	}  
	else if (kytu >= '1' && kytu <= '9'){
	  printf("do la so");
	}  
	else{
	  printf("ky tu khong nam trong bang Allphabet");
	} 
	return 0;
}
>>>>>>> ab125c79545c83c8ed075a1e2f19cfdb2acda4b9
