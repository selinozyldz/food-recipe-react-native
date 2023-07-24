export const categories = [
  {
    id: 3,
    name: 'Kurabiye',
    photo_url:
    'https://www.telegraph.co.uk/content/dam/Travel/2019/January/france-food.jpg?imwidth=1400'
  },
  {
    id: 1,
    name: 'Meksikan Yemeği',
    photo_url: 'https://ak1.picdn.net/shutterstock/videos/19498861/thumb/1.jpg'
  },
  {
    id: 2,
    name: 'İtalyan Yemeği',
    photo_url:
      'https://images.unsplash.com/photo-1533777324565-a040eb52facd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
  },
  {
    id: 4,
    name: 'Smoothie',
    photo_url:
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/still-life-of-three-fresh-smoothies-in-front-of-royalty-free-image-561093647-1544042068.jpg?crop=0.715xw:0.534xh;0.0945xw,0.451xh&resize=768:*'
  },
  {
    id: 0,
    name: 'Pizza',
    photo_url: 'https://amp.businessinsider.com/images/5c084bf7bde70f4ea53f0436-750-563.jpg'
  },
];

export const recipes = [
  {
    recipeId: 122,
    categoryId: 3,
    title: 'Yulaflı Kurabiye ',
    photo_url: 'https://www.texanerin.com/content/uploads/2019/06/nobake-chocolate-cookies-1-650x975.jpg',
    photosArray: ['https://www.texanerin.com/content/uploads/2019/06/nobake-chocolate-cookies-1-650x975.jpg'
    ],
    time: '15',
    ingredients: [[0, '200ml'], [1, '5g'], [2, '300g']],
    description:
      '--Yumurtanın akını biraz çırpıp kıvam almasını sağladıktan sonra içine 1 orta boy muzu koyup eziyoruz.\n\n --Ardından yulaf ve diğer malzemeleri ekliyoruz.\n\n --Cevizin falan miktarını yazmadım tamamen kendinize kalmış ben çok az kullandım.\n\n --Bütün malzemeler karıştırıp elimize yapışmadan şekil verebileceğimiz kıvama gelince yağlı kağıdın üzerine koyup önceden ısıtılmış 180 derece fırında pişiriyoruz.\n\n --Karışım elimize yapışırsa biraz daha yulaf ekleyebilirsiniz, afiyet olsun :)'
  },
  {
    recipeId: 3,
    categoryId: 4,
    title: 'Üçlü Berry Smoothie',
    photo_url:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png?crop=0.803xw:0.923xh;0.116xw,0.00510xh&resize=768:*',
    photosArray: [
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png?crop=0.803xw:0.923xh;0.116xw,0.00510xh&resize=768:*',
      'https://www.vitamix.com/media/other/images/xVitamix-Triple-Berry-Smoothie-square-crop__1.jpg.pagespeed.ic.OgTC3ILD3R.jpg',
      'http://images.media-allrecipes.com/userphotos/960x960/3798204.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrzui8MM6W66I29VZwVvcjpGv99JW3O1owgupc3KwB65rhAyrZ'
    ],
    time: '10',
    ingredients: [
      [59, '1'],
      [60, '1/2 çay bardağı'],
      [61, '1/2 su bardağı'],
    ],
    description: '--Bir karıştırıcıda, tüm malzemeleri birleştirin ve pürüzsüz olana kadar karıştırın. Daha sonra 2 fincan arasında bölün ve istenirse böğürtlen ekleyin.'
  },
  {
    recipeId: 2,
    categoryId: 3,
    title: 'Vegan Kurabiye',
    photo_url: 'https://www.texanerin.com/content/uploads/2018/06/no-bake-lactation-cookies-1-650x975.jpg',
    photosArray: ['https://www.texanerin.com/content/uploads/2018/06/no-bake-lactation-cookies-1-650x975.jpg'],
    time: '30',
    ingredients: [
      [0, '2 su bardağı'],
      [16, '1'],
      [12, '1 çay bardağı'],
      [19, '1 çay kaşığı'],
      [1, '2 çay kaşığı'],
      [4, '1/4 çay kaşığı'],
      [7, '1/8 çay kaşığı'],
      [20, '1/2 çay kaşığı'],
    ],
    description:
      '--Bademsiz de çok lezzetli, dışı yumuşak içi kıtır kavala kurabiyesi gibi bir kıvamda. \n\n --Toz malzemeleri eleyip sıvı yağını ekleyin.\n\n --Güzelce yoğurup bademleri hamura homojen şekilde yayın.\n\n --İstediğiniz şekli verip 180 derece fırında 15 dakika pişirin.'
  },
  {
    recipeId: 1,
    categoryId: 3,
    title: 'Brownies',
    photo_url: 'https://www.texanerin.com/content/uploads/2018/01/coconut-flour-brownies-1-650x975.jpg',
    photosArray: [
      'https://www.texanerin.com/content/uploads/2018/01/coconut-flour-brownies-1-650x975.jpg',
      'https://images-gmi-pmc.edge-generalmills.com/6fbc6859-e2b1-499d-b0fa-ada600c9cc3f.jpg',
      'http://www.recipe4living.com/assets/itemimages/400/400/3/83c29ac7418067c2e74f31c8abdd5a43_477607049.jpg',
      'https://www.franchisechatter.com/wp-content/uploads/2014/08/KFC-Photo-by-James.jpg'
    ],
    time: '30',
    ingredients: [
      [1, '2 yemek kaşığı'],
      [3, '1 yemek kaşığı'],
      [4, '1 çay kaşığı'],
      [5, '1/2 çay kaşığı'],
      [6, '1/2 çay kaşığı'],
      [7, '1/2 çay kaşığı'],
      [8, '1/2 çay kaşığı'],
      [9, '1/2 çay kaşığı'],
      [10, '1/2 çay kaşığı'],
      [11, '1/2 çay kaşığı'],
      [12, '1/2 bardak'],
      [16, '1'],
    ],
    description:
      'Brownie tarifi için öncelikle 150g tereyağını uygun bir tavaya alalım. Orta ateşte eritelim.\n\n --Yağ eridikten sonra bitter çikolatayı ekleyelim. Ocağı kapatarak bir spatula yardımı ile karıştırarak çikolatayı eritelim.\n\n --Güzelce eriyen çikolatamızı bir kenara alalım ve ılımaya bırakalım.\n\n --Uygun bir karıştırma kabına yumurtaları ve toz şekeri alarak mikserle beyazlaşıp köpük köpük olana kadar çırpalım.\n\n --Ilıyan tereyağlı çikolatayı kek harcımıza ekleyelim. Mikserle güzelce karışana kadar çırpalım.\n\n --Un ve vanilyayı da ekleyerek son kez tekrardan çırpalım.\n\n --Hazır olan kek harcını pişirme kağıdı yerleştirdiğimiz 22x22cm boyutlarındaki borcama aktaralım.\n\n --Üzerine iri parçalanmış fındık kırığı serpiştirelim. Önceden ısıtılmış 160°C fırında fansız ayarda yaklaşık 40 dakika pişmeye bırakalım.\n\n --Pişen browniyi fırından alalım. İlk sıcaklığının çıkması için bir telin üzerinde bekletelim.\n\n --Ardından dilimleyerek servis edelim. Afiyet olsun!'
  },
  {
    recipeId: 4,
    categoryId: 1,
    title: 'Mükemmel Balık Tacos',
    photo_url: 'https://hips.hearstapps.com/hmg-prod/images/190307-fish-tacos-112-1553283299.jpg',
    photosArray: [
      'http://d2814mmsvlryp1.cloudfront.net/wp-content/uploads/2014/04/WGC-Fish-Tacos-copy-2.jpg',
      'https://thecozyapron.com/wp-content/uploads/2018/03/baja-fish-tacos_thecozyapron_1.jpg',
      'https://www.simplyrecipes.com/wp-content/uploads/2017/06/2017-07-22-FishTacos-6.jpg'
    ],
    time: '35',
    ingredients: [
      [30, '1 meyve suyu'],
      [24, '2 çay kaşığı'],
      [0, '3 yemek kaşığı'],
      [3, '1 çay kaşığı'],
      [31, '1/2 çay kaşığı'],
      [32, '1/2 çay kaşığı'],
      [4, '2 çay kaşığı'],
      [33, '1/2 lb'],
      [27, '8'],
      [14, '2 çay kaşığı'],
      [34, '1']
    ],
    description:
      '-- Orta sığ bir kapta zeytinyağı, limon suyu, kırmızı biber, kırmızı biber tozu, kimyon ve acıyı birlikte çırpın. Morina ekleyin, eşit şekilde kaplanana kadar savurun. 15 dakika marine edelim. Bu arada lahana salatası yapın: Büyük bir kapta mayonez, limon suyu, kişniş ve balı çırpın. Lahana, mısır ve jalapeño ile karıştırın. Tuz ve karabiber ekleyin.\n\n -- Büyük bir yapışmaz tavada orta-yüksek ateşte bitkisel yağı ısıtın. Morina balığını marineden çıkarın ve her filetonun her iki tarafını da tuz ve karabiberle tatlandırın. Balık eti tarafı aşağı gelecek şekilde ekleyin. Her tarafı 3 ila 5 dakika opaklaşana ve tamamen pişene kadar pişirin.\n\n -- Çatalla pul pul dökmeden önce 5 dakika dinlendirin. Tacoları bir araya getirin: Mısır salatası ve avokado ile ızgara ekmeği üzerinde balık servis edin. Üzerine limon suyu sıkın ve ekşi krema ile süsleyin.'
  },
  {
    recipeId: 5,
    categoryId: 1,
    title: 'Tavuk Fajita',
    photo_url:
      'https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/Flavorful-Chicken-Fajitas_EXPS_GHBZ18_12540_B08_15_8b.jpg',
    photosArray: [
      'https://dadwithapan.com/wp-content/uploads/2015/07/Spicy-Chicken-Fajitas-22-1200x480.jpg',
      'https://3.bp.blogspot.com/-X-dHj7ORF9Q/XH4ssgTuSZI/AAAAAAAAEig/E46HP9wCfdsvyJFcMTX30cw-ICep8lF9ACHMYCw/s1600/chicken-fajitas-mexican-food-id-149559-buzzerg.jpg',
      'https://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/201403-xl-chipotle-chicken-fajitas.jpg?itok=ghVcI5SQ'
    ],
    time: 35,
    ingredients: [
      [9, '1/2 çay kaşığı'],
      [0, '4 yemek kaşığı'],
      [1, '1/2 çay kaşığı'],
      [30, '2 yemek kaşığı'],
      [31, '1 çay kaşığı'],
      [7, '1 çay kaşığı'],
      [24, '1/2 çay kaşığı'],
      [3, '1/2 çay kaşığı'],
      [21, '1 pound'],
      [22, '1/2 bardak'],
      [27, '6'],
      [36, '4'],
      [37, '1/2'],
      [38, '1/2']
    ],
    description:
      '-- Büyük bir kapta 2 yemek kaşığı yağ, limon suyu ve baharatları birleştirin; tavuğu ekleyin. Kaplamak için çevirin; kapak. \n\n  -- 1-4 saat buzdolabında bekletin. \n\n -- Büyük bir tavada biberleri ve soğanları kalan yağda çıtır çıtır olana kadar soteleyin. Çıkarın ve sıcak tutun. Tavuğu boşaltın, turşuyu atın. Aynı tavada tavuğu orta-yüksek ateşte 5-6 dakika veya pembeliği kaybolana kadar pişirin.\n\n -- Biber karışımını tavaya geri koyun; ısıtın. Ekmeğin ortasını dolduran kaşık; ikiye katlayın. İsteğe göre soslarla servis yapın.'
  },
  {
    recipeId: 6,
    categoryId: 2,
    title: 'Buffalo Pizza',
    photo_url:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    photosArray: [
      'https://www.tablefortwoblog.com/wp-content/uploads/2019/01/buffalo-chicken-pizza-recipe-photos-tablefortwoblog-3-500x500.jpg',
      'http://pizzachoicema.com/wp-content/uploads/2018/08/Buffalo-Chicken-Pizza.jpg',
      'https://static1.squarespace.com/static/565bb41ae4b0509ba9fdf769/t/5b9a8e80aa4a998b0be0fcf4/1536855690622/pizza.gif'
    ],
    time: 50,
    ingredients: [
      [39, '1 lb'],
      [40, '1 bardak'],
      [41, '1/2 bardak'],
      [42, '1/4 fincan'],
      [43, '2 yemek kaşığı'],
      [44, '1/2 bardak'],
      [7, '1/4 çay kaşığı'],
      [5, '1/4 çay kaşığı'],
      [30, '1/4 çay kaşığı'],
      [45, '2 ons'],
      [12, 'toz almak için'],
      [4, '1/2 çay kaşığı'],
      [47, '2'],
      [46, '9 ons']
    ],
    description:
      '-- Fırının üst üçte birine bir raf yerleştirin. Büyük bir dökme demir tavayı rafa yerleştirin ve fırını 500°ye ısıtın. Pizza hamurunu büyük bir kaseye koyun, üzerine biraz yağ dökün ve kaplayın. Kasenin üzerini plastikle örtün ve tava ve fırın ısınırken oda sıcaklığında hamurun kabarmasını bekleyin.\n\n -- Bu sırada acı sos, marinara sosu ve tereyağını orta boy bir tencerede orta ateşte ara sıra karıştırarak tereyağı eriyene kadar pişirin . Kremayı ilave edin, ısıyı düşürün ve ara sıra karıştırarak hafifçe kalınlaşana ve tamamen ısınana kadar yaklaşık 10 dakika pişirin. 1 yemek kaşığı ısıtın. orta-yüksek üzerinde büyük bir tavada yağ. Tavuğu ekleyin, kaplamak için karıştırın, ardından ¼ fincan Buffalo sosu ekleyin.\n\n -- Tavuğu ara sıra karıştırarak, iyice ısınana kadar yaklaşık 2 dakika pişirin. Isıyı azaltın ve sık sık karıştırarak tavuk iyice kaplanana ve sos hafifçe koyulaşana kadar yaklaşık 5 dakika pişirin. Bu arada yoğurt, limon suyu, kereviz tuzu, sarımsak tozu, ¼ su bardağı mavi peynir, ½ çay kaşığı çırpın. biber ve 2 yemek kaşığı. küçük bir kapta su, sos çok kalın görünüyorsa daha fazla su ekleyin ve bir kenara bırakın.\n\n -- Hamuru hafifçe unlanmış bir çalışma yüzeyine alın. Kullandığınız döküm tavadan biraz daha büyük olacak şekilde elinizle yuvarlak şekil verin. Sıcak tavayı fırından çıkarın ve ısıya dayanıklı bir yüzeye yerleştirin. Tavaya biraz un ekleyin. Hamuru tavaya koyun, ardından hamurun kenarlarını tava kenarlarına kadar parmak uçlarınızla işleyin. Hamurun arkasına ve altına akması için tavanın iç kenarına biraz yağ gezdirin, bu da kızarmayı teşvik eder ve serbest kalmasına yardımcı olur.\n\n -- Hamurun üzerine yaklaşık ⅓ fincan Buffalo sosu yayın. Üzerine mozzarella peynirini yerleştirin, ardından kalan ¼ fincan mavi peynirle süsleyin. Üzerine tavuklu karışımı dizin. Kabuk ve peynir güzelce kızarana kadar pizzayı üst rafta 15-20 dakika pişirin. Tavayı set üstü ocak üzerine aktarın ve pizzanın birkaç dakika dinlenmesini sağlayın. Bir spatula kullanarak pizzayı bir kesme tahtası veya tabla üzerine kaydırın. Üzerine kerevizi yerleştirin, ardından ayrılmış mavi peynir sosuyla süsleyin. Biberle tatlandırın, ardından yağ gezdirin.'
  },
  {
    recipeId: 0,
    categoryId: 0,
    title: 'Lazanya',
    photo_url: 'https://namelymarly.com/wp-content/uploads/2021/02/Zucchini_Lasagna_04-web.jpg.webp',
    photosArray: [
      "https://namelymarly.com/wp-content/uploads/2021/02/Zucchini_Lasagna_04-web.jpg.webp",
      'https://advancelocal-adapter-image-uploads.s3.amazonaws.com/image.al.com/home/bama-media/width600/img/news_impact/photo/burger-fijpg-57e7e5907630c2ad.jpg',
      'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1439,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1492718105/articles/2013/09/24/burger-king-s-new-french-fries-took-ten-years-to-develop/130923-gross-burger-tease_izz59e',
      'https://aht.seriouseats.com/images/2012/02/20120221-193971-fast-food-fries-Burger-King-fries-2.jpg'
    ],
    time: '15',
    ingredients: [
      [0, '200ml'], [1, '5g'], [2, '300g']],
    description:
      '-- 3/8 inçlik kibrit çubuklarına kestiğiniz temizlenmiş ve soyulmuş patateslerle başlayın. Çok soğuk su dolu bir kaseye koyun: su berraklaşana kadar durulamaya ve suyu değiştirmeye devam edin; iyice süzün ve kağıt havlu veya temiz, tüy bırakmayan bir mutfak havlusu ile kurulayın.\n\n -- Bu arada, kızgın yağınızı önceden 350 Fye ısıtın. Hazırladığınız patatesleri yağa koyun ve yaklaşık 5 dakika pişirin. Onlara o sarışın tonlu renge sahip olacaklar. \n\n -- Not: Kızgın yağa soğuk patatesleri eklediğinizde, yağınızın sıcaklığı düşecektir - 330 - 325 derece F arasında olmasını istiyorsunuz. \n\n -- Yağdan çıkarın ; boşaltın ve soğutun. Şimdi - ya pişirmeyi bitirmeye hazır olana kadar buzdolabında saklayın ya da tamamen soğutun ve 3 aya kadar dondurun. Düzgün dondurmak için - tamamen soğumuş kızartmaları tek kat halinde tepsiye koyun ve donana kadar dondurucuya koyun. Ardından poşetleyin.\n\n -- Pişirmeyi bitirmek için - yağınızı 400* Fye önceden ısıtın. Soğuk kızartmalarınızı ekleyin (bu yağ sıcaklığını düşürür - bu iyidir çünkü sıcaklığın 375 F dereceye yakın olmasını istiyorsunuz) ve bitene kadar birkaç dakika pişirin. Hafifçe tuzlayın ve tuzun iyice dağılması ve tuzlu olmaması için iyice çalkalayın.'
  },
  {
    recipeId: 7,
    categoryId: 2,
    title: 'Spaghetti Carbonara',
    photo_url: 'https://namelymarly.com/wp-content/uploads/2021/08/Lentil-Meatballs-01-Edit-web.jpg.webp',
    photosArray: [
      'https://namelymarly.com/wp-content/uploads/2021/08/Lentil-Meatballs-01-Edit-web.jpg.webp',
      'https://www.kcet.org/sites/kl/files/styles/kl_image_large/public/thumbnails/image/square_hero_desktop_2x_sfs_spaghetti_carbonara_clr-3.jpg?itok=T-rsBDIZ',
      'https://cdn-image.foodandwine.com/sites/default/files/HD-201104-r-spaghetti-with-anchovy.jpg'
    ],
    time: 15,
    ingredients: [
      [48, '50g'],
      [49, '100g'],
      [50, '350g'],
      [51, '2 tombul'],
      [42, '50g'],
      [16, '3'],
      [1, '2 çay kaşığı'],
      [4, '2 çay kaşığı']
    ],
    description:
      '-- Yumurta sarılarını bir kaseye koyun, Parmesan ile ince ince rendeleyin, karabiber ekleyin, ardından bir çatalla iyice karıştırın ve bir kenara koyun. Pancettanın sert derisini kesin ve bir kenara koyun, ardından eti doğrayın. Spagettiyi tuzlu suda kaynayan büyük bir tavada al dente olana kadar pişirin.\n\n -- Bu arada, varsa pancetta derisini orta boy bir tava tabanının her yerine sürün (bu harika bir lezzet katacaktır veya bunun yerine 1 yemek kaşığı yağ kullanın), ardından orta-yüksek ateşte koyun. Sarımsağı soyun, ardından avucunuzun içinde ezin, tavaya ekleyin ve yağı tatlandırmak için 1 dakika bekletin. Pancettayı karıştırın, ardından 4 dakika veya gevrekleşmeye başlayana kadar pişirin. Sarımsağı tavadan alın ve atın, ardından pişirme suyunun bir kısmını ayırın, süzün ve spagettiyi ekleyin.\n\n -- Ateşin üzerinde iyice karıştırarak tüm o güzel tadı gerçekten çekmesini sağlayın, ardından tavayı çıkarın sıcaktan Pişirme suyundan bir miktar ekleyin ve iyice karıştırın, karabiber ekleyin ve ardından yumurta karışımını dökün - tava, yumurtayı çırpmak yerine hafifçe pişirmeye yardımcı olacaktır. Güzel ve parlak olana kadar daha fazla pişirme suyu ekleyerek iyice karıştırın. Bir rende Parmesan ve ekstra bir tutam biberle servis yapın.'
  },
];

export const ingredients = [
  {
    ingredientId: 0,
    name: 'Sıvı Yağ',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/27252067/thumb/11.jpg'
  },
  {
    ingredientId: 1,
    name: 'Tuz',
    photo_url:
      'https://image.freepik.com/free-photo/sea-salt-wooden-bowl-isolated-white-background_29402-416.jpg'
  },
  {
    ingredientId: 2,
    name: 'Patates',
    photo_url: 'http://www.valleyspuds.com/wp-content/uploads/Russet-Potatoes-cut.jpg'
  },
  {
    ingredientId: 3,
    name: 'Kırmızı Biber',
    photo_url:
      'https://image.freepik.com/free-photo/red-chilli-pepper-powder-isolated-white-background_55610-28.jpg'
  },
  {
    ingredientId: 4,
    name: 'Karabiber',
    photo_url: 'https://ak0.picdn.net/shutterstock/videos/26741680/thumb/1.jpg'
  },
  {
    ingredientId: 5,
    name: 'Tuz',
    photo_url: 'https://www.hasiroglugurme.com/images/urunler/Koftelik-Esmer-Bulgur-resim-297.jpg'
  },
  {
    ingredientId: 6,
    name: 'Kurutulmuş Adaçayı',
    photo_url:
      'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/Esxjvv7/super-slow-motion-dried-sage-falling-on-white-background_n1xg2gxzg__F0000.png'
  },
  {
    ingredientId: 7,
    name: 'Kabartma Tozu',
    photo_url:
      'https://us.123rf.com/450wm/belchonock/belchonock1808/belchonock180818180/106007144-bowl-of-dry-garlic-powder-on-white-background.jpg?ver=6'
  },
  {
    ingredientId: 8,
    name: 'Yer yenibaharı',
    photo_url:
      'https://www.savoryspiceshop.com/content/mercury_modules/cart/items/2/6/9/2695/allspice-berries-jamaican-ground-1.jpg'
  },
  {
    ingredientId: 9,
    name: 'Kurutulmuş Kekik',
    photo_url: 'https://frutascharito.es/886-large_default/oregano.jpg'
  },
  {
    ingredientId: 10,
    name: 'Kurutulmuş Fesleğen',
    photo_url: 'https://www.honeychop.com/wp-content/uploads/2015/09/Dried-Mint.png'
  },
  {
    ingredientId: 11,
    name: 'Kutu Domates',
    photo_url: 'https://images-na.ssl-images-amazon.com/images/I/71YATIBqBYL._SX355_.jpg'
  },
  {
    ingredientId: 12,
    name: 'Un',
    photo_url:
      'https://images.assetsdelivery.com/compings_v2/seregam/seregam1309/seregam130900036.jpg'
  },
  {
    ingredientId: 13,
    name: 'Esmer Şeker',
    photo_url:
      'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/BALQTtekliuc6iu4u/rotating-brown-sugar-in-a-white-container-on-white-background_sis0xtbyl_thumbnail-full01.png'
  },
  {
    ingredientId: 14,
    name: 'Tuz',
    photo_url:
      'https://d1yn1kh78jj1rr.cloudfront.net/image/preview/r64-6MxPQjlatyfjp/storyblocks-top-view-of-ceramic-salt-cellar-with-coarse-grained-sea-salt-isolated-on-white-background_SPzKionPuV_SB_PM.jpg'
  },
  {
    ingredientId: 15,
    name: 'Bütün Tavuk',
    photo_url:
      'https://image.shutterstock.com/image-photo/two-raw-chicken-drumsticks-isolated-260nw-632125991.jpg'
  },
  {
    ingredientId: 16,
    name: 'Yumurta',
    photo_url:
      'https://image.shutterstock.com/image-photo/egg-whites-yolk-cup-isolated-260nw-1072453787.jpg'
  },
  {
    ingredientId: 17,
    name: 'Zeytinyağı',
    photo_url:
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fgettyimages-464433694_0.jpg%3Fitok%3DK42YR2GV&w=400&c=sc&poi=face&q=85'
  },
  {
    ingredientId: 18,
    name: 'Su',
    photo_url: 'https://ak1.picdn.net/shutterstock/videos/829561/thumb/11.jpg'
  },
  {
    ingredientId: 19,
    name: 'Soğan Tozu',
    photo_url:
      'https://image.shutterstock.com/image-photo/mixed-spices-isolated-on-white-260nw-662383828.jpg'
  },
  {
    ingredientId: 20,
    name: 'MSG',
    photo_url:
      'https://img.freepik.com/free-photo/monosodium-glutamate-wood-spoon-white-background_55883-399.jpg?size=626&ext=jpg'
  },
  {
    ingredientId: 21,
    name: 'Tavuk Göğsü',
    photo_url:
      'https://us.123rf.com/450wm/utima/utima1602/utima160200063/53405187-raw-chicken-breast-fillets.jpg?ver=6'
  },
  {
    ingredientId: 22,
    name: 'Soğan',
    photo_url: 'https://s3.envato.com/files/246703499/IMG_1752_5.jpg'
  },
  {
    ingredientId: 23,
    name: 'Domates',
    photo_url:
      'http://d3e1m60ptf1oym.cloudfront.net/45bab59a-363c-11e1-ab4e-bf4c2e0bb026/PANELA_xgaplus.jpg'
  },
  {
    ingredientId: 24,
    name: 'Toz biber',
    photo_url:
      'https://us.123rf.com/450wm/nuttapong/nuttapong1505/nuttapong150500009/40458002-paprika-powder-isolated-on-white-background.jpg?ver=6'
  },
  {
    ingredientId: 25,
    name: 'Biftek',
    photo_url:
      'https://images.radio.com/kmoxam/s3fs-public/styles/nts_image_cover_tall_775x425/public/dreamstime_s_39607998.jpg?XCM.w1UGOp9sVKkWGQZe7_JIsRddxoIK&itok=3M6KcFLH&c=73fb6497175b4c1a5c79e3ede816656a'
  },
  {
    ingredientId: 26,
    name: 'Barbunya fasulyesi, durulanmış ve süzülmüş olabilir ',
    photo_url:
      'https://www.seriouseats.com/images/2014/04/20140414-pile-of-beans-primary-1500x1125.jpg'
  },
  {
    ingredientId: 27,
    name: 'Büyük boy tortilla',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/5/56/NCI_flour_tortillas.jpg'
  },
  {
    ingredientId: 28,
    name: 'Firtoz',
    photo_url:
      'https://previews.123rf.com/images/ksena32/ksena321510/ksena32151000090/45863494-fried-fish-on-a-white-background.jpg'
  },
  {
    ingredientId: 29,
    name: 'Çedar Peyniri',
    photo_url:
      'https://image.shutterstock.com/image-photo/top-view-small-bowl-filled-260nw-284460308.jpg'
  },
  {
    ingredientId: 30,
    name: 'Limonsuyu',
    photo_url: 'https://ak8.picdn.net/shutterstock/videos/23271748/thumb/1.jpg'
  },

  {
    ingredientId: 31,
    name: 'Kimyon',
    photo_url:
      'https://image.shutterstock.com/image-photo/pile-cumin-powder-isolated-on-260nw-1193262853.jpg'
  },
  {
    ingredientId: 32,
    name: 'kırmızı biber',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/11461337/thumb/1.jpg'
  },
  {
    ingredientId: 33,
    name: 'lapa lapa beyaz balık',
    photo_url:
      'https://image.shutterstock.com/image-photo/roach-river-fish-isolated-on-260nw-277764143.jpg'
  },
  {
    ingredientId: 34,
    name: 'Avakado',
    photo_url:
      'https://www.redwallpapers.com/public/redwallpapers-large-thumb/avocado-cut-stone-leaves-white-background-free-stock-photos-images-hd-wallpaper.jpg'
  },
  {
    ingredientId: 35,
    name: 'Kırmızı soğan',
    photo_url:
      'https://as1.ftcdn.net/jpg/02/06/55/10/500_F_206551074_mVczUrAWOSMaw8kR48FQDQBqDw47jCtL.jpg'
  },
  {
    ingredientId: 36,
    name: 'Soğan',
    photo_url: 'http://www.allwhitebackground.com/images/2/2650.jpg'
  },
  {
    ingredientId: 37,
    name: 'Yeşil biber',
    photo_url: 'https://ak9.picdn.net/shutterstock/videos/4055509/thumb/1.jpg'
  },
  {
    ingredientId: 38,
    name: 'Kırmızı biber',
    photo_url: 'https://ak9.picdn.net/shutterstock/videos/10314179/thumb/1.jpg'
  },
  {
    ingredientId: 39,
    name: 'Pizza hamuru',
    photo_url:
      'https://image.shutterstock.com/image-photo/fresh-raw-dough-pizza-bread-260nw-518950903.jpg'
  },
  {
    ingredientId: 40,
    name: 'Ketçap',
    photo_url:
      'https://st2.depositphotos.com/5262887/11050/i/950/depositphotos_110501208-stock-photo-ketchup-bowl-isolated-on-white.jpg'
  },
  {
    ingredientId: 41,
    name: 'Acı sos',
    photo_url:
      'https://media.istockphoto.com/photos/opened-can-of-spaghetti-sauce-on-a-white-background-picture-id497704752?k=6&m=497704752&s=612x612&w=0&h=JnL54buYu1Z3fGtd8uNdjFxiAKwlxoDluD6jbIfSaZI='
  },
  {
    ingredientId: 42,
    name: 'Yağ',
    photo_url: 'https://redrockstoffee.com/media/2016/11/AdobeStock_76417550.jpeg'
  },
  {
    ingredientId: 43,
    name: 'Krema',
    photo_url:
      'https://media.istockphoto.com/photos/mayonnaise-in-bowl-isolated-on-white-background-picture-id614981116?k=6&m=614981116&s=612x612&w=0&h=LtbsI2HQXOTERYuP9YJ2PJfRF3W6DcyZ798fxMcQWC0='
  },
  {
    ingredientId: 44,
    name: 'tam yağlı sade yoğurt',
    photo_url:
      'https://st.depositphotos.com/2757384/3317/i/950/depositphotos_33170129-stock-photo-pouring-a-glass-of-milk.jpg'
  },
  {
    ingredientId: 45,
    name: 'Peynir',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/3619997/thumb/1.jpg'
  },
  {
    ingredientId: 46,
    name: 'Mozerella Peyniri',
    photo_url:
      'https://t3.ftcdn.net/jpg/02/06/73/98/500_F_206739841_suPu6qDPHlowFqx9qo8fLqV8sNevL2g3.jpg'
  },
  {
    ingredientId: 47,
    name: 'kereviz sapları',
    photo_url:
      'https://cdn4.eyeem.com/thumb/6d1b3957c7caa9b73c3e0f820ef854b931808139-1538043742765/w/750'
  },
  {
    ingredientId: 48,
    name: 'Parmesan Peyniri',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/3721877/thumb/1.jpg'
  },
  {
    ingredientId: 49,
    name: 'pancetta',
    photo_url:
      'https://previews.123rf.com/images/onlyfabrizio/onlyfabrizio1606/onlyfabrizio160600002/60198502-raw-stripes-of-pancetta-stesa-on-a-white-background.jpg'
  },
  {
    ingredientId: 50,
    name: 'Spaghetti',
    photo_url:
      'https://previews.123rf.com/images/mfron/mfron1204/mfron120400098/13306773-bunch-of-spaghetti-nudeln-isoliert-auf-wei%C3%9Fem-hintergrund.jpg'
  },
  {
    ingredientId: 51,
    name: 'Sarımsak',
    photo_url: 'https://image.freepik.com/free-photo/fresh-garlic-white-background_1339-17012.jpg'
  },
  {
    ingredientId: 52,
    name: 'Lazanya',
    photo_url:
      'https://previews.123rf.com/images/velkol/velkol1110/velkol111000004/11083085-an-image-of-raw-lasagna-on-white-background.jpg'
  },
  {
    ingredientId: 53,
    name: 'İtalyan sosu',
    photo_url:
      'https://previews.123rf.com/images/arinahabich/arinahabich1504/arinahabich150400858/38827029-raw-italian-sausage-on-a-white-background-.jpg'
  },
  {
    ingredientId: 54,
    name: 'Ezilmiş Domates',
    photo_url:
      'https://previews.123rf.com/images/merkulovnik/merkulovnik1406/merkulovnik140600100/28751626-crushed-tomato-isolated-on-white-background.jpg'
  },
  {
    ingredientId: 55,
    name: 'Şeker',
    photo_url:
      'https://previews.123rf.com/images/sommai/sommai1411/sommai141100034/33199985-sugar-cubes-in-a-bowl-isolated-on-white-background.jpg'
  },
  {
    ingredientId: 56,
    name: 'kıyılmış taze maydanoz',
    photo_url:
      'https://t4.ftcdn.net/jpg/02/15/78/05/240_F_215780551_Eid0xpP1M2fokvuEcvJj8uqhROLJkb3p.jpg'
  },
  {
    ingredientId: 57,
    name: 'Peynir',
    photo_url:
      'https://previews.123rf.com/images/barkstudio/barkstudio1608/barkstudio160800351/61418602-ricotta-cheese-into-a-bowl-in-white-background.jpg'
  },
  {
    ingredientId: 58,
    name: ' Rezene tohumu',
    photo_url:
      'https://previews.123rf.com/images/pinkomelet/pinkomelet1710/pinkomelet171000227/88851299-close-up-the-fennel-seed-on-white-background.jpg'
  },
  {
    ingredientId: 59,
    name: 'Muz',
    photo_url:
      'https://www.conservationmagazine.org/wp-content/uploads/2013/04/sterile-banana.jpg'
  },
  {
    ingredientId: 60,
    name: 'Dondurulmuş Çilek',
    photo_url:
      'https://www.cascadianfarm.com/wp-content/uploads/2018/12/Strawberries_Main_0218.png'
  },
  {
    ingredientId: 61,
    name: 'Yoğurt',
    photo_url:
      'http://images.media-allrecipes.com/userphotos/960x960/3758635.jpg'
  },
];
