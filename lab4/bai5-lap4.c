<<<<<<< HEAD
#include <stdio.h>
#include <stdlib.h>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */

int main(int argc, char *argv[]) {
	int choice;
	
	printf("MENU\n");
	printf("1. CF\n");
	printf("2. C\n");
	printf("3. HDJ\n");
	printf("4. DreamWeaver\n");
	printf("5. RDBMS\n");
	printf("6. Learn Java By Example\n");
	printf("chon : ");
	
	choice = getchar();
	
	switch (choice){
	    case '1' :
	    	printf("Ban chon CF\n");
	        break;
        case '2' :
       	    printf("Ban chon C\n");
       	    break;
       	case '3' :
       		printf("Ban chon HDJ\n");
       		break;
       	case '4' :
       		printf("Ban chon DreamWeaver\n");
       		break;
       	case '5' :
       		printf("Ban chon RDBMS\n");
       		break;
       	case '6' :
       		printf("Ban chon Learn Java By Example\n ");
	    default :
		printf("Lua chon khong hop le ");
		break;
	}
	return 0;
}
=======
#include <stdio.h>
#include <stdlib.h>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */

int main(int argc, char *argv[]) {
	int choice;
	
	printf("MENU\n");
	printf("1. CF\n");
	printf("2. C\n");
	printf("3. HDJ\n");
	printf("4. DreamWeaver\n");
	printf("5. RDBMS\n");
	printf("6. Learn Java By Example\n");
	printf("chon : ");
	
	choice = getchar();
	
	switch (choice){
	    case '1' :
	    	printf("Ban chon CF\n");
	        break;
        case '2' :
       	    printf("Ban chon C\n");
       	    break;
       	case '3' :
       		printf("Ban chon HDJ\n");
       		break;
       	case '4' :
       		printf("Ban chon DreamWeaver\n");
       		break;
       	case '5' :
       		printf("Ban chon RDBMS\n");
       		break;
       	case '6' :
       		printf("Ban chon Learn Java By Example\n ");
	    default :
		printf("Lua chon khong hop le ");
		break;
	}
	return 0;
}
>>>>>>> ab125c79545c83c8ed075a1e2f19cfdb2acda4b9
