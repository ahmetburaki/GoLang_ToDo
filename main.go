package main

import (
	"fmt"
	"log"
	"net/http"
	"net/http/httputil"
	"strings"
)

func main() {
	http.HandleFunc("/", handler)
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("static"))))
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func handler(w http.ResponseWriter, r *http.Request) {
	if r.Method == http.MethodGet || r.Method == http.MethodPost {
		// Gelen isteği detaylarıyla konsol çıktısında göster
		requestDump, err := httputil.DumpRequest(r, true)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		fmt.Println(string(requestDump))
	}

	if strings.HasPrefix(r.URL.Path, "/static/") {
		// Statik dosyalar için burada işlem yapmayız
		return
	}

	// İsteğe göre işlemler yapabilirsiniz.
	fmt.Fprintf(w, "Merhaba, bu bir GET/POST isteği!")
}
