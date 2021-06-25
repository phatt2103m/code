#include <stdio.h>
#include <stdlib.h>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */


 int main() {
    int i;
    float f;
    double d;
    char c;
    long int li;
    long double ld;
    printf("kich thuoc kieu du lieu int : %d Byte\n", sizeof i);
    printf("so nguyen : ");
    scanf("%d", &i);

    printf("kich thuoc kieu du lieu float : %d Byte\n", sizeof f);
    printf("so thuc kieu float : ");
    scanf("%f", &f);

    printf("kich thuoc kieu du lieu double : %d Byte\n", sizeof d);
    printf("so thuc kieu double : ");
    scanf("%lf", &d);

    printf("kich thuoc kieu du lieu char : %d Byte \n", sizeof c );
    printf("Ky tu : ");
    scanf("%s", &c);

    printf("kich thuoc kieu du lieu long int : %d Byte \n", sizeof li);

    printf("kich thuoc kieu du lieu long double : %d Byte\n",sizeof ld);

    return 0;


}
