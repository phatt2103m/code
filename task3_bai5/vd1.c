#include <stdio.h>
#include <stdlib.h>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */

void main(int argc, char *argv[]) {
	float p;
	float n;
	float r;
	float tienlai;
	printf("p tien von :  " );
	scanf("%f", &p);
	
	printf("n so nam : ");
	scanf("%f", &n);
	
	printf("r lai suat : ");
	scanf("%f", &r);
	
	tienlai = p*n*r/100;
	printf("tien lai : %f", tienlai);
	
	return 0;
}
