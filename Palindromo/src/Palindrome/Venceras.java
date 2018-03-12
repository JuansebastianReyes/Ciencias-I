/*
 * PALINDROMOS RECURSIVOS, CIENCIAS DE LA COMPUTACIÓN 1
 * ALEJANDRO MORALES 20161020541
 * SEBASTIAN REYES 20142020091
 * DANIEL PEPINOSA 20142020096
 */
package Palindrome;
import java.util.Scanner;
public class Venceras {
	private static Scanner leer; //Atributo static para scanner
	public boolean palindromo(char[] entrada1, int iniciar, int fin){ //Función palindromo, aquí se trabaja divide y venceras
		boolean pali=true;
		while(iniciar<fin){
			if(entrada1[iniciar]!= entrada1[fin]){
				pali=false;
				break;
			}
			iniciar++;
			fin--;
		}
		return pali;
	}
	public String palindrome(String cadena ){
		char[]entrada= cadena.toCharArray(); //Convirte la cadena en un arreglo de caracteres
		int inicio=0;
		int fin1=(entrada.length-1); //Define el tamaño del vector
		if(palindromo(entrada, inicio, fin1)){
			return " La cadena ya es palindroma";
		}else{
			inicio++;
		}
		while(inicio<fin1){
			if(palindromo(entrada, inicio, fin1)){
				break;
			}
			inicio++;
		}
		char[] regresa= new char[inicio];
		for(int i =0; i< regresa.length;i++){
			regresa[i]=entrada[--inicio];
			
		}
		return new String(regresa);
	}
	public static void main(String[] args) {
		leer = new Scanner(System.in);
		System.out.println("INGRESE LA CADENA");
		String cadena= leer.next();
		Venceras prueba= new Venceras();
		System.out.println(cadena+prueba.palindrome(cadena));
	}

}