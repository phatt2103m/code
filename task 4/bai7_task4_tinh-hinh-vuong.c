#include <stdio.h>
#include <stdlib.h>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */

int main(int argc, char *argv[]) {
   double s;
   double a;
   double p;
   printf("nhap so a : ");
   scanf("%lf", &a );
   
   s = a * a;
   printf("dien tich hinh vuong : %0.lf\n", s);
   
   p =  4 * a;
   printf("chu vi hinh vuong : %0.lf", p);
   
   return 0;
}
