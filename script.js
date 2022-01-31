function ellenorzes() {
    var nyeroszamokSzoveg = document.getElementById("nyeroszamok").value;
    var sajatszamokSzoveg = document.getElementById("sajatszamok").value;
    nyeroszamokSzoveg = nyeroszamokSzoveg.replace(/\s+/g, "")
    sajatszamokSzoveg = sajatszamokSzoveg.replace(/\s+/g, "")
    const nyeroszamok = nyeroszamokSzoveg.split(",")
    const sajatszamok = sajatszamokSzoveg.split(",")
    var szamlalo = 0

    if (nyeroszamokSzoveg == "" || sajatszamokSzoveg == "") {
        alert("Töltsd ki a mezőket")
        return;
    }
    sajatszamok.forEach(element => {
        if (nyeroszamok.includes(element)) {
            szamlalo = szamlalo + 1
        }
    });

    document.getElementById("ertek").innerHTML = "Találatok száma: " + szamlalo

}
