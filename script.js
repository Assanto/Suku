// Aritmatika

var TombolAritmatika = document.querySelector(".JawabanAritmatika");

TombolAritmatika.addEventListener("click", function () {
  var aAritmatika = parseInt(document.querySelector(".a_Aritmatika").value);
  var bAritmatika = parseInt(document.querySelector(".b_Aritmatika").value);
  var nAritmatika = parseInt(document.querySelector(".n_Aritmatika").value);

  var Robot = prompt("Are You Human? (Y/n)");
  if (Robot == "n") {
    alert("Dasar Robot!");
  }

  // Buat Tag Baru Pertama
  var h3_1 = document.createElement("h3");
  var Teks_h3_1 = document.createTextNode("Un = a + (n-1)b");
  h3_1.appendChild(Teks_h3_1);
  document.body.appendChild(h3_1);

  // Buat Tag Baru Kedua
  var h3_2 = document.createElement("h3");
  var Teks_h3_2 = document.createTextNode(
    "U" +
      nAritmatika +
      " = " +
      aAritmatika +
      " + ( " +
      nAritmatika +
      " - 1 )" +
      bAritmatika
  );
  h3_2.appendChild(Teks_h3_2);
  document.body.appendChild(h3_2);

  // Buat Tag Baru Ketiga

  var h3_3 = document.createElement("h3");
  var Teks_h3_3 = document.createTextNode(
    "U" +
      nAritmatika +
      " = " +
      aAritmatika +
      " + ( " +
      (nAritmatika - 1) +
      " )" +
      bAritmatika
  );
  h3_3.appendChild(Teks_h3_3);
  document.body.appendChild(h3_3);

  // Buat Tag Baru Keempat

  var h3_4 = document.createElement("h3");
  var Teks_h3_4 = document.createTextNode(
    "U" +
      nAritmatika +
      " = " +
      aAritmatika +
      " + " +
      (nAritmatika - 1) * bAritmatika
  );
  h3_4.appendChild(Teks_h3_4);
  document.body.appendChild(h3_4);

  // Buat Tag Baru Kelima
  var h3_5 = document.createElement("h3");
  var Teks_h3_5 = document.createTextNode(
    "U" + nAritmatika + " = " + (aAritmatika + (nAritmatika - 1) * bAritmatika)
  );
  h3_5.appendChild(Teks_h3_5);
  document.body.appendChild(h3_5);

  // Jadi

  var h3_6 = document.createElement("h3");
  var Teks_h3_6 = document.createTextNode(
    "Jadi U" +
      nAritmatika +
      " dari deret tersebut adalah " +
      (aAritmatika + (nAritmatika - 1) * bAritmatika)
  );
  h3_6.appendChild(Teks_h3_6);
  document.body.appendChild(h3_6);

  // Buat Garis
  var GarisAritmatika = document.createElement("hr");
  document.body.appendChild(GarisAritmatika);
});

// Geometri

var TombolGeometri = document.querySelector(".JawabanGeometri");

TombolGeometri.addEventListener("click", function () {
  var aGeometri = parseInt(document.querySelector(".a_Geometri").value);
  var rGeometri = parseInt(document.querySelector(".r_Geometri").value);
  var nGeometri = parseInt(document.querySelector(".n_Geometri").value);

  var Robot = prompt("Are You Human? (Y/n)");
  if (Robot == "n") {
    alert("Dasar Robot!");
  }

  // Buat Tag Baru 1

  var n_Kurang_1 = document.createElement("sup");
  var Tulisan = document.createTextNode("n-1");
  n_Kurang_1.appendChild(Tulisan);
  n_Kurang_1.classList.add("superscript");

  var h3_1 = document.createElement("h3");
  var Teks_h3_1 = document.createTextNode("Un = ar");
  h3_1.appendChild(Teks_h3_1);
  h3_1.appendChild(n_Kurang_1);
  document.body.appendChild(h3_1);

  // Buat Tag Baru 2
  var n_Kurang_1_2 = document.createElement("sup");
  var Tulisan2 = document.createTextNode(nGeometri + "-1");
  n_Kurang_1_2.appendChild(Tulisan2);
  n_Kurang_1_2.classList.add("superscript");

  var h3_2 = document.createElement("h3");
  var Teks_h3_2 = document.createTextNode(
    "U" + nGeometri + " = " + aGeometri + "." + rGeometri
  );
  h3_2.appendChild(Teks_h3_2);
  h3_2.appendChild(n_Kurang_1_2);
  document.body.appendChild(h3_2);

  // Buat Tag Baru 3
  var n_Kurang_1_3 = document.createElement("sup");
  var Tulisan3 = document.createTextNode(nGeometri - 1);
  n_Kurang_1_3.appendChild(Tulisan3);
  n_Kurang_1_3.classList.add("superscript");

  var h3_3 = document.createElement("h3");
  var Teks_h3_3 = document.createTextNode(
    "U" + nGeometri + " = " + aGeometri + "." + rGeometri
  );
  h3_3.appendChild(Teks_h3_3);
  h3_3.appendChild(n_Kurang_1_3);
  document.body.appendChild(h3_3);

  // Buat Tag Baru 4

  var h3_4 = document.createElement("h3");
  var Teks_h3_4 = document.createTextNode(
    "U" + nGeometri + " = " + aGeometri + "." + rGeometri ** (nGeometri - 1)
  );
  h3_4.appendChild(Teks_h3_4);
  document.body.appendChild(h3_4);

  // Buat Tag Baru 5

  var h3_5 = document.createElement("h3");
  var Teks_h3_5 = document.createTextNode(
    "U" + nGeometri + " = " + aGeometri * rGeometri ** (nGeometri - 1)
  );
  h3_5.appendChild(Teks_h3_5);
  document.body.appendChild(h3_5);

  // Jadi

  var h3_6 = document.createElement("h3");
  var Teks_h3_6 = document.createTextNode(
    " Jadi U" +
      nGeometri +
      " dari deret geometri tersebut adalah " +
      aGeometri * rGeometri ** (nGeometri - 1)
  );
  h3_6.appendChild(Teks_h3_6);
  document.body.appendChild(h3_6);

  // Buat Garis

  var GarisPP = document.createElement("hr");
  document.body.appendChild(GarisPP);
});
