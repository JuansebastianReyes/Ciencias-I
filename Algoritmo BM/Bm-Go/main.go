package main

import (
		"io/ioutil"
		"fmt"
		"unicode/utf8"
		"strings"
		)

func main() {

   fileData,err :=ioutil.ReadFile("./textoprueba.txt")

   if err != nil {
     fmt.Println("Error en el archivo")
   }


   var i int
   haystack := string(fileData)
   needle := "el"
   
   fmt.Println("ALGORITMO DE BOYER MOORE")
   fmt.Println("___________________________")
   fmt.Println("Su texto es: ")
   fmt.Println("___________________________")
   fmt.Println(string(fileData))
   fmt.Println("___________________________")
   fmt.Println("El texto en esperjo es: ")
   fmt.Println("___________________________")
   fmt.Println(Divide(haystack))
   fmt.Println("___________________________")

   i = Search(haystack, needle)

   fmt.Printf("El patron -> %s\n",needle)
   fmt.Printf("Esta %d\n",i)
   fmt.Printf("veces en el texto")

}

func BuildSkipTable(needle string) map[rune]int {
	l := utf8.RuneCountInString(needle)
	runes := []rune(needle)

	table := make(map[rune]int)

	for i := 0; i < l-1; i++ {
		j := runes[i]
		table[j] = l - i - 1
	}

	return table
}


func SearchBySkipTable(haystack, needle string, table map[rune]int) int {

	i, c := 0, 0
	hrunes := []rune(haystack)
	nrunes := []rune(needle)
	hl := utf8.RuneCountInString(haystack)
	nl := utf8.RuneCountInString(needle)
	var pasos[] int

	if hl == 0 || nl == 0 || hl < nl {
		return 0
	}

	if hl == nl && haystack == needle {
		return 1
	}

loop:
	for i+nl <= hl {
		for j := nl - 1; j >= 0; j-- {
			if hrunes[i+j] != nrunes[j] {
				if _, ok := table[hrunes[i+j]]; !ok {
					if j == nl-1 {
						i += nl
						
					} else {
						i += nl - j - 1
					}
				} else {
					n := table[hrunes[i+j]] - (nl - j - 1)
					if n <= 0 {
						i++
					} else {
						i += n
					}
				}
				goto loop
			}
		}

		if _, ok := table[hrunes[i+nl-1]]; ok {
			i += table[hrunes[i+nl-1]]
			pasos = append(pasos,i+2)
		} else {
			i += nl
			pasos = append(pasos,i)
		}

			

		c++
	}

	fmt.Println(Underline(hrunes,pasos,nl))
	fmt.Println("___________________________")
	return c
}

func Search(haystack, needle string) int {
	table := BuildSkipTable(needle)
	return SearchBySkipTable(haystack, needle, table)
}



func Underline(hrunes []rune, pasos []int, nl int)string{

	for i:=0;i<len(pasos);i++{
		for j:=1;j<=int(nl);j++{
			x:=pasos[i]-j
			hrunes[x]=rune(45)
		}
	}
	return string(hrunes)
}

func Reverse(s string) string{
	
	r := []rune(s)
	for i, j := 0, len(r)-1; i < len(r)/2; i, j = i+1, j-1 {
		r[i], r[j] = r[j], r[i]
	}
	return string(r)
}

func Divide(s string) string{
	var text[] string
	var jtext[] string
	text = strings.Split(s," ")
	for i:=0;i<len(text);i++{
		jtext=append(jtext,Reverse(text[i]))
	}
	return Join(jtext)
}

func Join(s []string) string{
	text := strings.Join(s," ")
	return text
}