<<<<<<< HEAD
#include <stdio.h>
#include <stdlib.h>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */

void main(int argc, char *argv[]) {
	char kytu ;
	printf("\nNhap mot ky tu trong bang alphabet : ");
	
	kytu = getchar();
	if(kytu >= 'a' && kytu <= 'z'|| kytu >= 'A' && kytu <= 'Z'){
	  printf(" kytu thuoc alphabet\n");
	  
	switch(kytu){
	case 'a' :
		printf(" kytu la nguyen am \n");
	break;
	case 'e' :
		printf(" kytu la nguyen am \n");
	break;
	case 'i' :
		printf(" kytu la nguyen am \n");
	break;
	case 'o' :
		printf(" kytu la nguyen am \n");
	break;
    case 'u' :
		printf(" kytu la nguyen am \n");
	break;
	case 'A' :
		printf(" kytu la nguyen am \n");
	break;
	case 'E' :
		printf(" kytu la nguyen am \n");
	break;
	case 'I' :
		printf(" kytu la nguyen am \n");
	break;
	case 'O' :
		printf(" kytu la nguyen am \n");
	case 'U' :
	break;
		printf(" kytu la nguyen am \n");
	    break;
	
	default:
		printf("kytu la phu am \n");
     	break;
        }
	}
	else
	    printf("kytu khong thuoc alphabet");
}
=======
#include <stdio.h>
#include <stdlib.h>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */

void main(int argc, char *argv[]) {
	char kytu ;
	printf("\nNhap mot ky tu trong bang alphabet : ");
	
	kytu = getchar();
	if(kytu >= 'a' && kytu <= 'z'|| kytu >= 'A' && kytu <= 'Z'){
	  printf(" kytu thuoc alphabet\n");
	  
	switch(kytu){
	case 'a' :
		printf(" kytu la nguyen am \n");
	break;
	case 'e' :
		printf(" kytu la nguyen am \n");
	break;
	case 'i' :
		printf(" kytu la nguyen am \n");
	break;
	case 'o' :
		printf(" kytu la nguyen am \n");
	break;
    case 'u' :
		printf(" kytu la nguyen am \n");
	break;
	case 'A' :
		printf(" kytu la nguyen am \n");
	break;
	case 'E' :
		printf(" kytu la nguyen am \n");
	break;
	case 'I' :
		printf(" kytu la nguyen am \n");
	break;
	case 'O' :
		printf(" kytu la nguyen am \n");
	case 'U' :
	break;
		printf(" kytu la nguyen am \n");
	    break;
	
	default:
		printf("kytu la phu am \n");
     	break;
        }
	}
	else
	    printf("kytu khong thuoc alphabet");
}
>>>>>>> ab125c79545c83c8ed075a1e2f19cfdb2acda4b9
