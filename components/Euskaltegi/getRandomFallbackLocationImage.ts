const fallbackLocationImages = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Txindoki.Euskal_Herria.jpg/640px-Txindoki.Euskal_Herria.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Krutzeganeko_zutarria_2.jpg/640px-Krutzeganeko_zutarria_2.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Oribarzar_hondartza_orion.jpg/640px-Oribarzar_hondartza_orion.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Uvas_en_Vi%C3%B1edos_An%C3%A1huac_en_Queretaro.jpg/640px-Uvas_en_Vi%C3%B1edos_An%C3%A1huac_en_Queretaro.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Ama_Birji%C3%B1a_jaiak._Herri_kirolak_%2897-210%29.jpg/640px-Ama_Birji%C3%B1a_jaiak._Herri_kirolak_%2897-210%29.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Ama_Birji%C3%B1a_jaiak._Herri_kirolak_%2897-210%29.jpg/640px-Ama_Birji%C3%B1a_jaiak._Herri_kirolak_%2897-210%29.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Dantzariak_Santio_jaietan_%2896-155%29.jpg/640px-Dantzariak_Santio_jaietan_%2896-155%29.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Dantzariak_Adunako_jaietan_%2896-310%29.jpg/640px-Dantzariak_Adunako_jaietan_%2896-310%29.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Zigoitiko_udal_pilotalekua.JPG/640px-Zigoitiko_udal_pilotalekua.JPG",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Leon_Shepard_%22TEVIN%22._Miami_Jai_Alai.jpg/640px-Leon_Shepard_%22TEVIN%22._Miami_Jai_Alai.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Fuenterrab%C3%ADa_023.jpg/640px-Fuenterrab%C3%ADa_023.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Fuenterrab%C3%ADa_09.jpg/640px-Fuenterrab%C3%ADa_09.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Legarralde_baserria.jpg/640px-Legarralde_baserria.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Gamizeko_Errementaria_baserria.jpg/640px-Gamizeko_Errementaria_baserria.jpg",
];

export const getRandomFallbackLocationImage = () =>
  fallbackLocationImages[
    Math.floor(Math.random() * fallbackLocationImages.length)
  ];
