<<<<<<< HEAD
#include<stdio.h>
#include<stdlib.h>

int main(){
	int total = 0;
	int Number;
	
	printf("\nEnter Number : ");
	scanf("%d", &Number);
	
	while(Number != 0){
		total += Number % 10;
		Number = Number / 10;
	}
	printf("Total degits : %d", total);
	return 0;
}
=======
#include<stdio.h>
#include<stdlib.h>

int main(){
	int total = 0;
	int Number;
	
	printf("\nEnter Number : ");
	scanf("%d", &Number);
	
	while(Number != 0){
		total += Number % 10;
		Number = Number / 10;
	}
	printf("Total degits : %d", total);
	return 0;
}
>>>>>>> ab125c79545c83c8ed075a1e2f19cfdb2acda4b9
