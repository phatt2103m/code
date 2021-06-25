<<<<<<< HEAD
#include <stdio.h>
#include <stdlib.h>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */

int main(int argc, char *argv[]) {
	int a,b,c;
	scanf("%d%d%d",&a,&b,&c);
	 if( a*a==b*b+c*c || b*b==a*a+c*c || c*c== a*a+b*b){
		printf(" la tam giac vuong\n");
		if(a*a==b*b+c*c){
			printf("a la canh huyen");
		} else if(b*b==a*a+c*c){
			printf("b la canh huyen");
		}else{
			printf("c la canh huyen");
		}
		
	}
	else
	printf("k la tam giac vuong");
	return 0;
}
=======
#include <stdio.h>
#include <stdlib.h>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */

int main(int argc, char *argv[]) {
	int a,b,c;
	scanf("%d%d%d",&a,&b,&c);
	 if( a*a==b*b+c*c || b*b==a*a+c*c || c*c== a*a+b*b){
		printf(" la tam giac vuong\n");
		if(a*a==b*b+c*c){
			printf("a la canh huyen");
		} else if(b*b==a*a+c*c){
			printf("b la canh huyen");
		}else{
			printf("c la canh huyen");
		}
		
	}
	else
	printf("k la tam giac vuong");
	return 0;
}
>>>>>>> ab125c79545c83c8ed075a1e2f19cfdb2acda4b9
