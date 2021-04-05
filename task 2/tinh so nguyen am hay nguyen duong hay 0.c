#include <stdio.h>
#include <stdlib.h>

int main()
{
    int a ;
    printf("a=");
    scanf("%d", &a);
    if(a>0){
        printf("so do la nguyen duong");
    }
    else if(a<0){
        printf("so do la nguyen am");
    }
    else{
        printf("so do bang 0");
    }
    return 0;
}
