var ContentText;
var SingersParagraph;
var i = 0;
var BoxRed = new Array(21);
BoxRed[0] = '<img src = "LiSA.jpg" width = 100% height = 100% alt = "LiSA" />';
BoxRed[1] = '<img src = "NiziU.jpg" width = 100% height = 100% alt = "NiziU" />';
BoxRed[2] = '<img src = "櫻坂46.jpg" width = 100% height = 100% alt = "櫻坂46" />';
BoxRed[3] = '<img src = "Awesome City Club.jpg" width = 100% height = 100% alt = "Awesome City Club" />';
BoxRed[4] = '<img src = "日向坂46.jpg" width = 100% height = 100% alt = "日向坂46" />';
BoxRed[5] = '<img src = "天童よしみ.jpg" width = 100% height = 100% alt = "天童よしみ" />';
BoxRed[6] = '<img src = "上白石萌音.jpg" width = 100% height = 100% alt = "上白石萌音" />';
BoxRed[7] = '<img src = "milet.jpg" width = 100% height = 100% alt = "milet" />';
BoxRed[8] = '<img src = "水森香織1.jpg" width = 100% height = 100% alt = "水森香織" />';
BoxRed[9] = '<img src = "AI.jpg" width = 100% height = 100% alt = "AI" />';
BoxRed[10] = '<img src = "BiSH.jpg" width = 100% height = 100% alt = "BiSH" />';
BoxRed[11] = '<img src = "perfume.jpg" width = 100% height = 100% alt = "Perfume" />';
BoxRed[12] = '<img src = "millennium parade.jpg" width = 100% height = 100% alt = "millennium parade×Belle" />';
BoxRed[13] = '<img src = "乃木坂46.jpg" width = 100% height = 100% alt = "乃木坂46" />';
BoxRed[14] = '<img src = "坂本冬美.jpg" width = 100% height = 100% alt = "坂本冬美" />';
BoxRed[15] = '<img src = "YOASOBI.jpg" width = 100% height = 100% alt = "YOASOBI" />';
BoxRed[16] = '<img src = "あいみょん.jpg" width = 100% height = 100% alt = "あいみょん" />';
BoxRed[17] = '<img src = "東京事変.jpg" width = 100% height = 100% alt = "東京事変" />';
BoxRed[18] = '<img src = "薬師丸ひろ子.jpg" width = 100% height = 100% alt = "薬師丸ひろ子" />';
BoxRed[19] = '<img src = "石川さゆり.jpg" width = 100% height = 100% alt = "石川さゆり" />';
BoxRed[20] = '<img src = "MISIA.jpg" width = 100% height = 100% alt = "MISIA" />';

var BoxWhite = new Array(21);
BoxWhite[0] = '<img src = "郷ひろみ.jpg" width = 100% height = 100% alt = "郷ひろみ" />';
BoxWhite[1] = '<img src = "DISH.jpg" width = 100% height = 100% alt = "DISH//" />';
BoxWhite[2] = '<img src = "山内惠介.jpg" width = 100% height = 100% alt = "山内惠介" />';
BoxWhite[3] = '<img src = "GENERATIONS.jpg" width = 100% height = 100% alt = "GENERATIONS" />';
BoxWhite[4] = '<img src = "純烈.jpg" width = 100% height = 100% alt = "純烈" />';
BoxWhite[5] = '<img src = "SixTONES.jpg" width = 100% height = 100% alt = "SixTONES" />';
BoxWhite[6] = '<img src = "KAT-TUN.jpg" width = 100% height = 100% alt = "KAT-TUN" />';
BoxWhite[7] = '<img src = "King & Prince.jpg" width = 100% height = 100% alt = "King & Prince" />';
BoxWhite[8] = '<img src = "まふまふ.jpg" width = 100% height = 100% alt = "まふまふ" />';
BoxWhite[9] = '<img src = "SnowMan.jpg" width = 100% height = 100% alt = "Snow Man" />';
BoxWhite[10] = '<img src = "関ジャニ∞.jpg" width = 100% height = 100% alt = "関ジャニ∞" />';
BoxWhite[11] = '<img src = "平井大.jpg" width = 100% height = 100% alt = "平井大" />';
BoxWhite[12] = '<img src = "宮本浩次.jpg" width = 100% height = 100% alt = "宮本浩次" />';
BoxWhite[13] = '<img src = "藤井風.jpeg" width = 100% height = 100% alt = "藤井風" />';
BoxWhite[14] = '<img src = "鈴木雅之.jpg" width = 100% height = 100% alt = "鈴木雅之" />';
BoxWhite[15] = '<img src = "ゆず.jpg" width = 100% height = 100% alt = "ゆず" />';
BoxWhite[16] = '<img src = "星野源.jpg" width = 100% height = 100% alt = "星野源" />';
BoxWhite[17] = '<img src = "BUMP OF CHICKEN.jpg" width = 100% height = 100% alt = "BUMP OF CHICKEN" />';
BoxWhite[18] = '<img src = "氷川きよし.jpg" width = 100% height = 100% alt = "氷川きよし" />';
BoxWhite[19] = '<img src = "布袋寅泰.jpg" width = 100% height = 100% alt = "布袋寅泰" />';
BoxWhite[20] = '<img src = "福山雅治.jpg" width = 100% height = 100% alt = "福山雅治" />';

function start()
{
    document.getElementById( "RedTeam" ).addEventListener( "click" , Red , false);;
    document.getElementById( "WhiteTeam" ).addEventListener( "click" , White , false);
    document.getElementById( "MainPage" ).addEventListener( "click" , Home , false);
    SingersParagraph = document.getElementById( "Singers" );
    ContentText = document.getElementById ( "content" );

    $("#MainPage").click(function(){
        $("#Singers").hide();
    });
    $("#RedTeam").click(function(){
        $("#Singers").show();
    });
    $("#WhiteTeam").click(function(){
        $("#Singers").show();
    });
}

function Red(){
    ContentText.setAttribute("style","font-size: 20px;background-image: linear-gradient( 135deg, #FFD3A5 10%, #FD6585 100%);text-align: center;margin-left: 25%;padding:calc(100%/24); width: calc(100%/12*6);")
    ContentText.innerHTML = "";
    SingersParagraph.innerHTML = "";
    SingersParagraph.innerHTML += '<div id = BoxRed' + 0 + ' class = box style = "margin-left: 25%;">'+BoxRed[0]+'</div>';
    for(i = 1;i < 7;i++){
        SingersParagraph.innerHTML += '<div id = BoxRed' + i + ' class = box style = "style = "display: inline;">'+BoxRed[i]+'</div>';
    }
    SingersParagraph.innerHTML += '<br><br><br><br><br>'
    SingersParagraph.innerHTML += '<div id = BoxRed'+7+' class = box style = "margin-left: 25%;">'+BoxRed[7]+'</div>';
    for(i = 8;i < 14;i++){
        SingersParagraph.innerHTML += '<div id = BoxRed'+i+' class = box style = "style = "display: inline;">'+BoxRed[i]+'</div>';
    }
    SingersParagraph.innerHTML += '<br><br><br><br><br>'
    SingersParagraph.innerHTML += '<div id = BoxRed'+14+' class = box style = "margin-left: 25%;">'+BoxRed[14]+'</div>';
    for(i = 15;i < 21;i++){
        SingersParagraph.innerHTML += '<div id = BoxRed'+i+' class = box style = "style = "display: inline;">'+BoxRed[i]+'</div>';
    }
    ContentText.innerHTML += '<p>紅方為女性歌手的組合，在截至目前為止的歌回戰中共取得了33勝。</p>';
    document.getElementById( "BoxRed0" ).addEventListener( "click" , LiSA , false);
    document.getElementById( "BoxRed1" ).addEventListener( "click" , NiziU , false);
    document.getElementById( "BoxRed2" ).addEventListener( "click" , 櫻坂46 , false);
    document.getElementById( "BoxRed3" ).addEventListener( "click" , AwesomeCityClub , false);
    document.getElementById( "BoxRed4" ).addEventListener( "click" , 日向坂46 , false);
    document.getElementById( "BoxRed5" ).addEventListener( "click" , 天童よしみ , false);
    document.getElementById( "BoxRed6" ).addEventListener( "click" , 上白石萌音 , false);
    document.getElementById( "BoxRed7" ).addEventListener( "click" , milet , false);
    document.getElementById( "BoxRed8" ).addEventListener( "click" , 水森かおり , false);
    document.getElementById( "BoxRed9" ).addEventListener( "click" , AI , false);
    document.getElementById( "BoxRed10" ).addEventListener( "click" , BiSH , false);
    document.getElementById( "BoxRed11" ).addEventListener( "click" , Perfume , false);
    document.getElementById( "BoxRed12" ).addEventListener( "click" , millenniumparade , false);
    document.getElementById( "BoxRed13" ).addEventListener( "click" , 乃木坂46 , false);
    document.getElementById( "BoxRed14" ).addEventListener( "click" , 坂本冬美 , false);
    document.getElementById( "BoxRed15" ).addEventListener( "click" , YOASOBI , false);
    document.getElementById( "BoxRed16" ).addEventListener( "click" , あいみょん , false);
    document.getElementById( "BoxRed17" ).addEventListener( "click" , 東京事變 , false);
    document.getElementById( "BoxRed18" ).addEventListener( "click" , 薬師丸ひろ子 , false);
    document.getElementById( "BoxRed19" ).addEventListener( "click" , 石川小百合 , false);
    document.getElementById( "BoxRed20" ).addEventListener( "click" , MISIA , false);
}

function LiSA(){
    ContentText.innerHTML = "";
    ContentText.innerHTML += '<img src = LiSA1.jpg max-width="640"/>'
    ContentText.innerHTML += '<h1>LiSA<h1>'
    ContentText.innerHTML += '<p>LiSA（1987年6月24日－）是日本女歌手，岐阜縣出身，曾為搖滾樂團「Love is Same All」的主唱，現所屬唱片公司為日本索尼音樂娛樂旗下的SACRA MUSIC。演唱過許多知名動畫的片頭曲和片尾曲，如《刀劍神域》、《Fate/Zero》、《偽戀》、《穿透幻影的太陽》。</p>';
    ContentText.innerHTML += '<p>LiSA的發跡為動畫Angle Beats!的邀情，以Girls Dead Monster starring LiSA的名義為劇中腳色由依代唱。後來在2011以LiSA的身分個人主流出道，並發表出道作《Letters to U》，同年首張單曲《oath sign》作為知名動畫Fate/zero的主題曲，在日本Oricon公信榜獲得第5位</p>'
    ContentText.innerHTML += '<p>2020年以《鬼滅之刃劇場版 無限列車篇》的主題曲《炎》獲得日本唱片大獎，進而走進大眾的視野中。</p>'
    ContentText.innerHTML += '<h1>出演曲目:明け星</h1>'
    ContentText.innerHTML += '<iframe id="ytplayer" type="text/html" width="640" height="360"src="https://www.youtube.com/embed/yGcm81aaTHg"frameborder="0"></iframe>';
    ContentText.innerHTML += '<p>收錄收錄在LiSA的第20張單曲專輯《明け星/白銀》中，是TV動畫《鬼滅之刃 無限列車篇》的片頭曲。</p>';
    ContentText.innerHTML += '<h1>推薦曲目:Believe in ourselves</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/mLXIkCU8Fe0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    ContentText.innerHTML += '<p>講述了LiSA自身從以前的無名小卒到現在日本家喻戶曉的歌手的心路歷程，以及對支持自己的粉絲的感謝之情。</p>'
}

function NiziU(){
    ContentText.innerHTML = "";
    ContentText.innerHTML += '<img src = NiziU1.jpg width="640"/>'
    ContentText.innerHTML += '<h1>NiziU<h1>'
    ContentText.innerHTML += '<p>NiziU，為日本索尼音樂娛樂和韓國JYP娛樂聯手打造的日本九人女子團體，成員通過JYP自製生存實境節目『Nizi Project』篩選而出。</p>';
    ContentText.innerHTML += '<p>於2020年12月2日發行單曲《Step and a step》在日本正式出道。 </p>'
    ContentText.innerHTML += '<p>由JYP娛樂公司創辦者朴軫永命名，取自Nizi Project的「Nizi（彩虹）」和支持粉絲的「U」組成，有「Need you」的意思，寓意為「人們永遠不可能靠自己一個人獲得成功，要記得你們需要彼此、需要粉絲。」</p>'
    ContentText.innerHTML += '<h1>出演曲目:Take a picture</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/OlHb1qH-zS4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    ContentText.innerHTML += '<p>NiziU的第2張單曲，於2021年4月7日在日本發行，唱片公司為日本史詩唱片，本張單曲為雙A面單曲。</p>';
    ContentText.innerHTML += '<h1>推薦曲目:Make you happy</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/QW28YKqdxe0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    ContentText.innerHTML += '<p>在正式出道前所推出的先行數位迷你專輯，由JYP娛樂製作，唱片公司為日本索尼音樂。曾經在youtube上以一個月兩千萬的觀看數衝上全球熱門音樂排行榜。</p>'
}

function 櫻坂46() { 
    ContentText.innerHTML = "";
    ContentText.innerHTML += '<img src = 流れ弾.jpg width="640"/>'
    ContentText.innerHTML += '<h1>櫻坂46<h1>'
    ContentText.innerHTML += '<p>櫻坂46是日本大型女子偶像團體，為繼乃木坂46之後成立的第2個「坂道系列」團體。</p>';
    ContentText.innerHTML += '<p>組團時原定名為「櫸坂46」，2020年10月14日起改為現名櫻坂46。 </p>'
    ContentText.innerHTML += '<p>旗下曾擁有一附屬團體「平假名櫸坂46」，後來獨立並改名為日向坂46。</p>'
    ContentText.innerHTML += '<h1>出演曲目:流れ弾</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/drCopBcrxRM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    ContentText.innerHTML += '<p>《流彈》是日本女子偶像組合櫻坂46的第3張單曲，由Sony Records於2021年10月13日發行。Center（中心成員）由田村保乃擔任。</p>';
}

function AwesomeCityClub() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += '<img src = AwesomeCityClub1.jpg width="640"/>'
    ContentText.innerHTML += '<h1>Awesome City Club<h1>'
    ContentText.innerHTML += '<p>以東京為據點，由 Atagi、Morisee、Matsuzaka Takumi、Yukie、PORIN五人組成的樂團。</p>';
    ContentText.innerHTML += '<p>最能代表近代日本City Pop的團體，兼具復古與流行思維，並以「虛構城市 Awesome City 的 Soundtrack 」為創作概念。</p>'
    ContentText.innerHTML += '<h1>出演曲目:勿忘</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/zkZARKFuzNQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    ContentText.innerHTML += '<p>日劇『花束みたいな恋をした』主題曲，電影上映前就已先釋出，數位串流總數超過10億，在日本唱片大賞上也得到了優秀作品賞。</p>';
    ContentText.innerHTML += '<h1>推薦曲目:color</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/IIzz_Um6-mU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    ContentText.innerHTML += '<p>Awesome City Club第13張數位單曲，哈根達斯網路廣告「サマー・セッション」主題曲。</p>'
}

function 日向坂46() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += '<img src = 日向坂461.jpg width="640"/>'
    ContentText.innerHTML += '<h1>日向坂46<h1>'
    ContentText.innerHTML += '<p>日向坂46是日本大型女子偶像團體，與乃木坂46、櫻坂46、吉本坂46同為坂道系列團體之一</p>';
    ContentText.innerHTML += '<h1>出演曲目:君しか勝たん</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/Z59HsgPVbWY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    ContentText.innerHTML += '<p>日向坂46的第5張單曲，於2021年5月26日由Sony Records發行。同名標題曲由秋元康作詞、Derek Turner作曲，Center則由加藤史帆擔任。</p>';
}

function 天童よしみ() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += '<img src = 天童よしみ1.jpg width="640"/>'
    ContentText.innerHTML += '<h1>天童よしみ<h1>'
    ContentText.innerHTML += '<p>天童よしみ本名吉田芳美，是日本的演歌歌手。出生於和歌山縣田邊市芳養町。屬於日本藝能界其中一名重量級的資深歌手。</p>';
    ContentText.innerHTML += '<h1>出演曲目:あんたの花道</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/gsX5N9eztHg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    ContentText.innerHTML += '<p>2002發售，作詞為木下龍太郎，作曲為安藤実親。</p>';
}

function 上白石萌音() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += '<img src = 上白石萌音1.jpg width="640"/>'
    ContentText.innerHTML += '<h1>上白石萌音<h1>'
    ContentText.innerHTML += '<p>上白石萌音是日本女演員、歌手、聲優，鹿兒島出身，隸屬東寶藝能事務所。</p>';
    ContentText.innerHTML += '<p>2016年替新海誠編劇執導的動畫電影《你的名字》女主角宮水三葉配音大開知名度。</p>';
    ContentText.innerHTML += '<h1>出演曲目:夜明けをくちずさめたら</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/A_04CDFV7g4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    ContentText.innerHTML += '<p>上白石萌音第7張數位單曲，詞曲皆為水野良樹創作，自2020年4月從NHK的音樂節目『みんなのうた』開始串流。</p>';
}

function milet() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += '<img src = milet1.jpg width="640"/>'
    ContentText.innerHTML += '<h1>milet<h1>'
    ContentText.innerHTML += '<p>2019發售的首張EP《inside you》作為為富士電視台電視劇《スキャンダル専門弁護士 QUEEN》的主題曲，在首周便衝上Oricon的排行榜串流冠軍。還與知名樂團ONE OK ROCK、MAN WITH A MISSION合作過，並且在第二年就登上紅白舞台，可謂出道即巔峰的範例。</p>';
    ContentText.innerHTML += '<p>在加拿大留學過的經驗讓她有著流利且標準的英文發音，在英日文之間的歌詞切換圓滑標準。</p>'
    ContentText.innerHTML += '<h1>出演曲目:Fly High</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/TMDNnaQiCHY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    ContentText.innerHTML += '<p>NHK冬季運動會主題曲，在NHK杯國際滑冰賽後播出，是一首獻給不斷戰鬥的人們的歌曲。</p>';
    ContentText.innerHTML += '<h1>推薦曲目:Who I Am</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/4SZUjD15AR8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    ContentText.innerHTML += '<p>收錄於milet的第六張迷你專輯，作為朝日電視台『七人の秘書』主題曲，本人亦在劇中客串路邊街頭歌手的角色。</p>'
}

function 水森かおり() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += '<img src = 水森香織2.jpg width="640"/>'
    ContentText.innerHTML += '<h1>水森かおり<h1>'
    ContentText.innerHTML += '<p>水森香織，是一名日本女性演歌歌手。所屬的經理人公司為長良製作。所屬唱片公司為德間日本傳播。出身於東京都北區。</p>';
    ContentText.innerHTML += '<h1>出演曲目:いい日旅立ち</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/_FjX2oG5I18" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    ContentText.innerHTML += '<p>1978年釋出、山口百惠的第24張單曲，作為「DISCOVER JAPAN（美しい日本と私）」旅遊推廣的活動主題曲。</p>';
}

function AI() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += '<img src = AI1.jpg width="640"/>'
    ContentText.innerHTML += '<h1>AI<h1>'
    ContentText.innerHTML += '<p>植村愛，日本女歌手，藝名AI，生於美國加州洛杉磯，長於日本鹿兒島。</p>';
    ContentText.innerHTML += '<p>1996年赴美進修，因為深喜節奏藍調，於是決定投身黑人音樂，1999年出道，2000年返日演出，曾與平井堅、安室奈美惠、阪本龍一、加藤米莉亞、美國嘻哈歌手史努比狗狗等合作。</p>';
    ContentText.innerHTML += '<h1>出演曲目:アルデバラン</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/8IOSztadymc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    ContentText.innerHTML += '<p>由森山直太朗負責詞曲、斎藤ネコ編曲，作為NHK連續電視小說『カムカムエヴリバディ』的主題曲。</p>';
}

function BiSH() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += '<img src = BiSH1.jpg width="640"/>'
    ContentText.innerHTML += '<h1>BiSH<h1>'
    ContentText.innerHTML += '<p>日本的偶像團體，號稱為「不演奏樂器的龐克樂隊」。2015年結成。隸屬於WACK。唱片公司為avex trax。</p>';
    ContentText.innerHTML += '<p>團體名稱BiSH為「Brand-new idol SHiT」的縮寫。</p>';
    ContentText.innerHTML += '<h1>出演曲目:プロミスザスター</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/ox8WVRnb8GA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    ContentText.innerHTML += '<p>BiSH的第二張單曲，自2017年3月由avex trax販賣。</p>';
    ContentText.innerHTML += '<h1>推薦曲目:Orchestra</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/_RRbVhobb9o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    ContentText.innerHTML += '<p>收錄於BiSH第一張主流出道的專輯『KiLLER BiSH』，由松隈ケンタ負責作曲、JxSxK共同作詞。</p>'
}

function Perfume() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += '<img src = Perfume1.jpg width="640"/>'
    ContentText.innerHTML += '<h1>Perfume<h1>'
    ContentText.innerHTML += '<p>Perfume是一個出身於日本廣島縣的女子流行電子音樂組合，所屬唱片公司為Perfume Records / UNIVERSAL J，全部成員均為AMUSE經紀公司屬下。</p>';
    ContentText.innerHTML += '<p>Perfume自2003年集成發展至今已經成為日本最具知名度的女子團體之一，多張暢銷單曲及專輯為她們在日本音樂市場帶來不同獎項及成就，至今已擁有多張金唱片單曲、一張雙白金專輯、四張白金專輯及兩張金專輯，日本唱片總銷量逾130萬。</p>';
    ContentText.innerHTML += '<h1>出演曲目:ポリゴンウェイヴ</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/Q5_2VK_Hj2s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    ContentText.innerHTML += '<p>《ポリゴンウェイヴ EP》是Perfume第一張迷你專輯，於2021年9月22日發行。唱片公司為Perfume Records / UNIVERSAL J。</p>';
    ContentText.innerHTML += '<h1>推薦曲目:Dream Fighter</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/rBX5YGPNDbs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    ContentText.innerHTML += '<p>Perfume的第八張單曲。於2008年11月19日發行。唱片公司為Tokuma Japan Communications。</p>'
    ContentText.innerHTML += '<p>在單曲推出的時候，同時Perfume亦完成了日本武道館公演的夢想。歌曲中歌詞可說是與Perfume十分配合，同樣是傳遞著為夢想奮鬥的正面信息。</p>'
}

function millenniumparade() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += '<img src = millenniumparade1.jpg width="640"/>'
    ContentText.innerHTML += '<h1>millennium parade<h1>'
    ContentText.innerHTML += '<p>millennium parade為King Gnu製作人常田大希領軍的創意品牌團隊PERIMETRON旗下的新企畫。</p>';
    ContentText.innerHTML += '<p>號召 King Gnu 自己人以外也包含 Black Boboi 團員，同時加入 PERIMETRON 藝術團隊使他們能運用強大的美術設計，展現在專輯周邊、平面與MV視覺，更包含現場以動畫搭配3D眼鏡打造賽博龐克感的未來體驗。</p>';
    ContentText.innerHTML += '<img src = 中村佳穂.webp width="640"/>'
    ContentText.innerHTML += '<h1>中村佳穂<h1>'
    ContentText.innerHTML += '<p>日本女歌手，20歲進入京都精工大學進行音樂相關活動，2016 年發行首張專輯《Repeat Tower Gatatsu》即獲得好評，同年便出現在日本知名音樂祭 FUJI ROCK 中，亮眼表現成功吸引到大眾目光而逐漸打開知名度。</p>';
    ContentText.innerHTML += '<h1>出演曲目:U</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/R3V4sAXUJ-g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    ContentText.innerHTML += '<p>細田守打造的動畫電影『竜とそばかすの姫』主題曲，由兩個指標的當代音樂人合作，於2021年8月全國配信，中村佳穂也替動畫女主角鈴（女高中生）與 Belle（虛擬歌姬）的雙重身分配音。</p>';
}

function 乃木坂46() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += '<img src = 乃木坂461.jpg width="640"/>'
    ContentText.innerHTML += '<h1>乃木坂46<h1>'
    ContentText.innerHTML += '<p>乃木坂46是日本大型女子偶像團體，成立於2011年8月21日；其出道時定位為另一女子偶像團體AKB48的「官方對手」，但有獨立的幕後團隊，行銷策略及團體風格也與AKB48系列團體不同，惟總製作人同樣是秋元康。</p>';
    ContentText.innerHTML += '<h1>出演曲目:きっかけ</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/g0reB9P3fjw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    ContentText.innerHTML += '<p>收錄於乃木坂46的第2張專輯《それぞれの椅子》，於2016年5月由N46Div.發行。</p>';
}

function 坂本冬美() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += '<img src = 坂本冬美1.webp width="640"/>'
    ContentText.innerHTML += '<h1>坂本冬美<h1>'
    ContentText.innerHTML += '<p>坂本冬美是日本演歌界地位十分崇高的女性實力派演歌歌手，出生於和歌山縣西牟婁郡上富田町。</p>';
    ContentText.innerHTML += '<p>於1986年在由日本放送協會所舉辦的「勝ち抜き歌謡天国」比賽脫穎而出，為資深作曲家豬俁公章賞識收為弟子而開始了她的演歌之路。於1987年3月推出首張單曲《暴打太鼓》（あばれ太鼓）正式出道。</p>';
    ContentText.innerHTML += '<h1>出演曲目:夜桜お七</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/f3cmggPaQMw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    ContentText.innerHTML += '<p>1994年9月由由東芝EMI發售，是坂本冬美的第12張單曲，歌名的「お七」來自於八百屋お七，為坂本冬美心目中的現代女性形象。</p>';
}

function YOASOBI() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += '<img src = YOASOBI1.jpg width="640"/>'
    ContentText.innerHTML += '<h1>YOASOBI<h1>'
    ContentText.innerHTML += '<p>YOASOBI是2019年結成的日本雙人音樂組合，由使用VOCALOID的製作人Ayase、以及創作歌手ikura組成。</p>';
    ContentText.innerHTML += '<p>結成原因是受到日本索尼音樂娛樂經營的小說及插畫網站「monogatary.com」的邀請，將他們文庫中的原作小說音樂化。</p>';
    ContentText.innerHTML += '<p>團名的原意為「在夜晚玩耍」（夜遊び），由於兩位團員本來都有各自的音樂工作，兩人把原本各自的工作定義為「早上的活動」，所以這個音樂組合就是「晚上的活動」，因此命名。</p>';
    ContentText.innerHTML += '<h1>出演曲目:群青</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/Y4nEEZwckuU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    ContentText.innerHTML += '<p>ブルボン公司的「アルフォートミニチョコレート」零食廣告主題曲，有別於組合製作的其他曲子，群青是唯一一個不是透過小說音樂化的作品，而是由漫畫家山口飛翔創作的漫畫《藍色時期》改編而成。</p>';
    ContentText.innerHTML += '<h1>推薦曲目:夜に駆ける</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/x8VYWazR5mE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    ContentText.innerHTML += '<p>組合成立後推出的第一個作品，為2020年最熱門的歌曲，於《日本告示牌》的「日本百大單曲榜」、「下載歌曲」和「串流播放歌曲」三個週榜蟬連三次冠軍，同時也是雙人組合串流數量最高的作品。</p>'
    ContentText.innerHTML += '<p>改編自星野舞夜創作的小說《タナトスの誘惑》，講述一名精神病患者與自己所幻想出來的「死神大人」奔赴死亡的故事。</p>'
}

function あいみょん() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += '<img src = あいみょん1.png width="640"/>'
    ContentText.innerHTML += '<h1>あいみょん<h1>'
    ContentText.innerHTML += '<p>愛繆是日本女性創作歌手，出生於兵庫縣西宮市，所屬經紀公司為ENS Entertainment。</p>';
    ContentText.innerHTML += '<p>2016年11月，以單曲《生きていたんだよな》主流出道，此曲同時也被東京電視台連續劇《吉祥寺だけが住みたい街ですか?》啟用為主題曲。</p>';
    ContentText.innerHTML += '<h1>出演曲目:愛を知るまでは</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/iytiWFxt09w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    ContentText.innerHTML += '<p>收錄於あいみょん的第11張單曲「愛を知るまでは/桜が降る夜は」，為日本電視台連續劇《コントが始まる》的主題曲。</p>';
    ContentText.innerHTML += '<h1>推薦曲目:マリーゴールド</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/0xSiBpUdW4E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    ContentText.innerHTML += '<p>《マリーゴールド》為あいみょん的第五張單曲，於2018年8月發售，描述在多變的夏季風光中男女戀愛的場景。</p>'
    ContentText.innerHTML += '<p>本作的MV由山田智和導演，全程在上海拍攝。場景包括踩著滑板在街頭滑行、以及獨自一人在房間內唱歌的畫面，意圖表現「悲傷與愛」這一主題。</p>'
}

function 東京事變() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += '<img src = 東京事變1.jpg width="640"/>'
    ContentText.innerHTML += '<h1>東京事変<h1>'
    ContentText.innerHTML += '<p>來自日本的樂團，成立於2003年、2012年解散、2020年復出。</p>';
    ContentText.innerHTML += '<p>成員共有五人，分別為椎名林檎（創作歌手）、龜田誠治（生物股長、GLAY、back number的貝斯手）、浮雲（女王蜂、星野源的吉他手）、刄田綴色（中島美嘉、RADWIMPS的鼓手）和伊澤一葉（aiko、平井堅、米津玄師的鋼琴手），每一位成員皆為在日本音樂界舉足輕重的大人物。</p>';
    ContentText.innerHTML += '<h1>出演曲目:緑酒</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/OS45uTF_8P0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    ContentText.innerHTML += '<p>收錄於東京事變的第8張專輯《音楽》，作為東京電視台節目『ワールドビジネスサテライト』的片尾曲，綠酒的的涵義為「為了在不久後的將來，拿著盛著綠酒的酒杯乾杯的瞬間，現在也要繼續努力」。</p>';
    ContentText.innerHTML += '<h1>推薦曲目:群青日和</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/gD2mhJ3ByGQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    ContentText.innerHTML += '<p>主唱椎名林檎告別個人歌手生涯後的第一個作品，東京事變的首張單曲，由東芝EMI／Virgin Music於2004年9月8日發行。更成為三洋電機的au手機『W21SA』廣告主題曲。</p>'
}

function 薬師丸ひろ子() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += '<img src =  薬師丸ひろ子1.jpg width="640"/>'
    ContentText.innerHTML += '<h1>薬師丸ひろ子<h1>'
    ContentText.innerHTML += '<p>日本演員、歌手。出身於東京都港區北青山的藥師丸是1980年代早期出道的知名偶像，並一直持續在演藝圈中活躍。</p>';
    ContentText.innerHTML += '<h1>出演曲目:Woman "Wの悲劇"より</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/spdyRCGWGPA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    ContentText.innerHTML += '<p>藥師丸博子於1984年10月發布的第四張單曲，作為電影『Wの悲劇』的主題曲，她在擔任主演的同時也演唱了主題曲。</p>';
}

function 石川小百合() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += '<img src =  石川小百合1.jpg width="640"/>'
    ContentText.innerHTML += '<h1>石川小百合<h1>'
    ContentText.innerHTML += '<p>石川小百合，本名石川絹代，是日本殿堂級的演歌歌手，在演歌界有著舉足輕重的影響力。</p>';
    ContentText.innerHTML += '<h1>出演曲目:津輕海峽·冬景色</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/Leiebo4V2cE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    ContentText.innerHTML += '<p>1977年發表的《津輕海峽·冬景色》銷量超過百萬，因此首次受邀參加NHK紅白歌合戰，星途從此一帆風順。</p>';
    ContentText.innerHTML += '<p>NHK官方指定《津輕海峽·冬景色》與《越過天城》兩首歌做為石川小百合的紅白出戰歌曲已經達到了21次。</p>';
}

function MISIA() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += '<img src = MISIA1.jpg width="640"/>'
    ContentText.innerHTML += '<h1>MISIA<h1>'
    ContentText.innerHTML += '<p>MISIA是日本女性歌手、作曲家，出生於長崎縣對馬市，所屬經紀公司為Rhythmedia，所屬唱片公司為日本索尼音樂旗下品牌Ariola Japan。</p>';
    ContentText.innerHTML += '<p>擁有能跨越五個八度的音域，曾演唱經典海豚音歌曲《LOVING YOU》，其混厚的歌聲和驚人的肺活量也讓她成為日本樂壇的"巨肺歌手"。</p>';
    ContentText.innerHTML += '<p>她的出現終結了小室哲哉與織田哲郎獨霸日本樂壇的局面，讓二十世紀90年代末的日本流行音樂發生轉向，讓R&B成為主流。</p>';
    ContentText.innerHTML += '<p>被譽為國寶級的歌聲，為日本在國際舞台演出的首選。</p>';
    ContentText.innerHTML += '<h1>出演曲目:明日へ</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/jqd0wnW_HCI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    ContentText.innerHTML += '<p>收錄於MISIA第10張專輯『SOUL QUEST』，為東日本大地震的復興活動應援主題曲。</p>';
    ContentText.innerHTML += '<h1>推薦曲目:逢いたくていま</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/MYo5alIaUOk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    ContentText.innerHTML += '<p>MISIA的第23張單曲，由MISIA作詞，佐佐木潤作曲，於2009年11月發售，為TBS電視台周日劇場《JIN-仁-》的主題曲。</p>'
}

function White(){
    ContentText.setAttribute("style","font-size: 20px;background-color: #ffffff;background-image: linear-gradient(270deg, #ffffff 0%, #d4d4d4 100%);text-align: center;margin-left: 25%;padding:calc(100%/24); width: calc(100%/12*6);")
    ContentText.innerHTML = "";
    SingersParagraph.innerHTML = "";
    SingersParagraph.innerHTML += '<div id = BoxWhite'+0+' class = box style = "margin-left: 25%;">'+BoxWhite[0]+'</div>';
    for(i = 1;i < 7;i++){
        SingersParagraph.innerHTML += '<div id = BoxWhite'+i+' class = box style = "style = "display: inline;">'+BoxWhite[i]+'</div>';
    }
    SingersParagraph.innerHTML += '<br><br><br><br><br>'
    SingersParagraph.innerHTML += '<div id = BoxWhite'+7+' class = box style = "margin-left: 25%;">'+BoxWhite[7]+'</div>';
    for(i = 8;i < 14;i++){
        SingersParagraph.innerHTML += '<div id = BoxWhite'+i+' class = box style = "style = "display: inline;">'+BoxWhite[i]+'</div>';
    }
    SingersParagraph.innerHTML += '<br><br><br><br><br>'
    SingersParagraph.innerHTML += '<div id = BoxWhite'+14+' class = box style = "margin-left: 25%;">'+BoxWhite[14]+'</div>';
    for(i = 15;i < 21;i++){
        SingersParagraph.innerHTML += '<div id = BoxWhite'+i+' class = box style = "style = "display: inline;">'+BoxWhite[i]+'</div>';
    
    }
    ContentText.innerHTML += '<p>白方為男性歌手的組合，在截至目前為止的歌回戰中共取得了39勝。並且從第56回（2005年）到第61回（2010年）的6連勝是迄今紅白歌唱大賽史上的最長連勝紀錄。</p>';
    document.getElementById( "BoxWhite0" ).addEventListener( "click" , 郷ひろみ , false);
    document.getElementById( "BoxWhite1" ).addEventListener( "click" , DISH , false);
    document.getElementById( "BoxWhite2" ).addEventListener( "click" , 山内惠介 , false);
    document.getElementById( "BoxWhite3" ).addEventListener( "click" , GENERATIONS , false);
    document.getElementById( "BoxWhite4" ).addEventListener( "click" , 純烈 , false);
    document.getElementById( "BoxWhite5" ).addEventListener( "click" , SixTONES , false);
    document.getElementById( "BoxWhite6" ).addEventListener( "click" , KATTUN , false);
    document.getElementById( "BoxWhite7" ).addEventListener( "click" , KingPrince , false);
    document.getElementById( "BoxWhite8" ).addEventListener( "click" , まふまふ , false);
    document.getElementById( "BoxWhite9" ).addEventListener( "click" , SnowMan , false);
    document.getElementById( "BoxWhite10" ).addEventListener( "click" , 関ジャニ , false);
    document.getElementById( "BoxWhite11" ).addEventListener( "click" , 平井大 , false);
    document.getElementById( "BoxWhite12" ).addEventListener( "click" , 宮本浩次 , false);
    document.getElementById( "BoxWhite13" ).addEventListener( "click" , 藤井風 , false);
    document.getElementById( "BoxWhite14" ).addEventListener( "click" , 鈴木雅之 , false);
    document.getElementById( "BoxWhite15" ).addEventListener( "click" , ゆず , false);
    document.getElementById( "BoxWhite16" ).addEventListener( "click" , 星野源 , false);
    document.getElementById( "BoxWhite17" ).addEventListener( "click" , BUMPOFCHICKEN , false);
    document.getElementById( "BoxWhite18" ).addEventListener( "click" , 氷川きよし , false);
    document.getElementById( "BoxWhite19" ).addEventListener( "click" , 布袋寅泰 , false);
    document.getElementById( "BoxWhite20" ).addEventListener( "click" , 福山雅治 , false);
}

function 郷ひろみ() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += '<img src = 郷ひろみ1.jpg width="640"/>'
    ContentText.innerHTML += '<h1>郷ひろみ<h1>'
    ContentText.innerHTML += '<p>鄉裕美（1955年10月18日－），原名「原武裕美」（是日本的一名男性歌手和演員。鄉裕美出生於福岡縣，但在東京都長大。目前隸屬於Burning Production。</p>'
    ContentText.innerHTML += '<p>1971年在銀座的試鏡中被強尼喜多川選中，加入了傑尼斯事務所，便開啟了自己的演藝道路，曾主演《青春をつっ走れ》、《あしたに駈けろ!》以及《ちょっとしあわせ》······等多部電視劇。</p>'
    ContentText.innerHTML += '<p>曾在紅白中連續4年擔任白組的先攻打手，為歷年白組出場歌手中最多（全體最多為2012的濱崎步）。</p>'
    ContentText.innerHTML += '<h1>出演曲目:2億4千万の瞳-エキゾチック・ジャパン-</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/f8XUgBMSDWo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    ContentText.innerHTML += '<p>1984年發售的歌曲，用於日本國鐵的宣傳活動，並且在2007年改編作為BSデジタル放送突破3000萬台的紀念活動歌曲。</p>'
    ContentText.innerHTML += '<h1>推薦曲目:言えないよ</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/qc337kkjCwM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    ContentText.innerHTML += '<p>1995年的原創敘事樂曲中的最後一首，與2億4千萬の瞳、逢いたくてしかたない總稱為敘事樂曲三部曲。</p>'
}

function DISH() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += '<img src = DISH1.jpeg width="640"/>'
    ContentText.innerHTML += '<h1>DISH//<h1>'
    ContentText.innerHTML += '<p>DISH//，為日本男子舞蹈搖滾樂團。團名念法為「DISHU」，為DISH與SLASH的複合音。其隸屬於星塵傳播旗下團體「惠比壽學園男子部」，於2011年12月25日組成、2012年6月10日獨立製作出道、2013年6月19日以單曲「I Can Hear」主流出道，主流出道後所屬唱片公司為Sony Music Records。</p>'
    ContentText.innerHTML += '<p>起初僅為手拿樂器的唱跳團體，本身並不演奏，但到後來有了想做自己的音樂的想法，成功轉型成一個真正的樂團。</p>'
    ContentText.innerHTML += '<p>在2021年首次登上紅白。</p>'
    ContentText.innerHTML += '<h1>出演曲目:猫</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/gsT6eKsnT0M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    ContentText.innerHTML += '<p>為知名創作歌手あいみょん作詞作曲，是在他們2017年推出的單曲《僕たちがやりました》中收錄的一首歌，被歌迷稱為隱藏神曲，直到SONY的THE FIRST TAKE邀請他們在Youtube頻道中表演後，才一口氣爆紅。</p>'
}

function 山内惠介() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += '<img src = 山内惠介1.jpg width="640"/>'
    ContentText.innerHTML += '<h1>山內惠介<h1>'
    ContentText.innerHTML += '<p>山內惠介（1983年5月31日－）是一名日本男性演歌歌手，出生於九州福岡縣糸島郡前原町（即現時的糸島市），目前所屬唱片公司為JVC建伍勝利娛樂。</p>'
    ContentText.innerHTML += '<p>山內惠介與有「演歌王子」之稱的冰川清志為同鄉，而大家亦恰巧在同一時期師隨歌謠曲作曲家水森英夫學習，為他的門下學生。</p>'
    ContentText.innerHTML += '<h1>出演曲目:有楽町で逢いましょう</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/7Nog3QNmCq4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    ContentText.innerHTML += '<p>原唱為日本另一名演歌大師フランク永井，山內惠介在此次比賽中選擇翻唱這一首歌。</p>'
    ContentText.innerHTML += '<h1>推薦曲目:スポットライト</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/9-fhQGaL68o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    ContentText.innerHTML += '<p>山內的出道只比冰川晚一年，但相比冰川一出道便保持極高的超人氣支持度，山內的認識度一直都都遠被拋離，直至2015年憑此曲《Spotlight》爆紅，才使更多人對他開始有所認識。</p>'
}

function GENERATIONS() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += '<img src = GENERATIONS1.jpg width="640"/>'
    ContentText.innerHTML += '<h1>GENERATIONS from EXILE TRIBE<h1>'
    ContentText.innerHTML += '<p>放浪新世代 from 放浪一族是日本7人男子組合，所屬的演藝公司為LDH，唱片公司為rhythm zone，於2011年結成。 </p>'
    ContentText.innerHTML += '<p>GENERATIONS為「EXILE Pyramid」的其中一個所屬部份。而成員均是「有夢想的年輕的挑戰者」，同時亦被認同為「承繼EXILE之信念的人」，而有能力者將成為「EXILE TRIBE(EXILE一族)」之一。</p>'
    ContentText.innerHTML += '<h1>出演曲目:Make Me Better</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/TBdhE_Q-aNc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    ContentText.innerHTML += '<p>發布於2021年的第六張專輯『Up & Down』。</p>'
}

function 純烈() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += '<img src = 純烈1.jpg width="640"/>'
    ContentText.innerHTML += '<h1>純烈<h1>'
    ContentText.innerHTML += '<p>純烈，是日本的四人男子男子團體，以演唱日本歌謠曲及演歌，於2008年成立。現時所屬的唱片公司為日本皇冠，經紀公司為G-STAR.PRO。 </p>'
    ContentText.innerHTML += '<p>成團以來一直奉行「親孝行」（孝順）、「紅白出場」以及「全國47個都道府縣巡迴演唱會」為目標。</p>'
    ContentText.innerHTML += '<h1>出演曲目:君がそばにいるから</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/s1ff76MCmtg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    ContentText.innerHTML += '<p>發布於2021年的第六張專輯『Up & Down』。</p>'
}

function SixTONES() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += '<img src = SixTONES1.jpeg width="640"/>'
    ContentText.innerHTML += '<h1>SixTONES<h1>'
    ContentText.innerHTML += '<p>SixTONES是由傑尼斯事務所的傑西、松村北斗、森本慎太郎、京本大我、田中樹及高地優吾所組成的團體，於2015年5月1日結成，2020年1月22日正式發行單曲出道。</p>'
    ContentText.innerHTML += '<p>ix不發音，唸作STONES。代表六名成員都有各自屬於自己的音色。有別於一般傑尼斯藝人多為自己投履歷參加甄選，成員當中有一半是被社長發掘而加入傑尼斯。六名成員皆加入傑尼斯長達10年以上，最小的在9歲就被發掘入社。 </p>'
    ContentText.innerHTML += '<h1>出演曲目:マスカラ</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/WAvDu9DzcSw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    ContentText.innerHTML += '<p>於2021發布的第五張單曲，由KingGnu的製作人常田大希負責詞曲。</p>'
    ContentText.innerHTML += '<h1>推薦曲目:Imitation Rain</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/C6G6lo6359Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    ContentText.innerHTML += '<p>收錄於《Imitation Rain / D.D.》，同時是SixTONES和Snow Man的第一張單曲，分別由Sony Music Labels及avex trax於2020年1月22日在日本發行。</p>'
}

function KATTUN() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += '<img src = KAT-TUN1.jpg width="640"/>'
    ContentText.innerHTML += '<h1>KAT-TUN<h1>'
    ContentText.innerHTML += '<p>KAT-TUN是日本傑尼斯事務所旗下的藝人組合；於2001年3月16日組成，2006年3月22日正式發行CD出道。</p>'
    ContentText.innerHTML += '<p>團名原是由6名成員的姓氏羅馬拼音首字母所組成，因為在日文發音中與卡通及「勝利的運氣」相近，而有著像卡通般精采以及勝利的含義；至於中間的「-」，則代表的是粉絲。</p>'
    ContentText.innerHTML += '<p>出道發行的單曲、専輯與DVD，在發行首週即達成三項公信榜冠軍，成為日本史上甫出道即達成三項冠軍的團體或歌手；另外也是USEN綜合排行冠軍、原唱鈴聲下載排行冠軍，而達成前所未有的五冠王佳績。</p>'
    ContentText.innerHTML += '<h1>出演曲目:Real Face #2</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/9tHUx4wPAH8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    ContentText.innerHTML += '<p>《Real Face》是KAT-TUN的第一張單曲同是也是出道曲，在出道15年後首次登上紅白，演唱了其改編版本《Real Face#2》。</p>'

}

function KingPrince() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += '<img src = KingPrince1.png width="640"/>'
    ContentText.innerHTML += '<h1>King & Prince<h1>'
    ContentText.innerHTML += '<p>King & Prince是日本傑尼斯事務所旗下的5人偶像男子組合，於2018年5月23日發行單曲出道，所屬唱片公司為環球音樂。</p>'
    ContentText.innerHTML += '<h1>出演曲目:恋降る月夜に君想ふ</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/nFC1KWmGoXU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    ContentText.innerHTML += '<p>為King & Prince的第8張單曲，於2021年10月6日在日本發行，唱片公司為日本環球音樂。同時也是平野紫耀出演東寶電影『輝夜姬想讓人告白～天才們的戀愛頭腦戰～Final』的主題曲。</p>'
}

function まふまふ() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += '<img src = まふまふ1.jpg width="640"/>'
    ContentText.innerHTML += '<h1>まふまふ<h1>'
    ContentText.innerHTML += '<p>日本男歌手、創作歌手。除個人活動之外，亦同歌手SORARU組成音樂組合「After the Rain」，並擔任其作詞、作曲、編曲。Mafumafu的音域廣及5個八度（A2-C6-C8），可以發出由低音域至與VOCALOID媲美之高音域，音樂影片於網上被觀看超過17億次。</p>'
    ContentText.innerHTML += '<p>為首位於紅白登場的網路歌手。</p>'
    ContentText.innerHTML += '<h1>出演曲目:命に嫌われている。</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/eq8r1ZTma08" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    ContentText.innerHTML += '<p>《被生命厭惡著。》是製作人カンザキイオリ創作的歌曲，原唱為初音未來，是一首歌名容易讓人產生誤會的曲子，但實際上這首歌的歌詞是在勸人努力勇敢的活下去。</p>'
    ContentText.innerHTML += '<p>雖然まふまふ也有自己原創的曲子，但由於此曲為他最有名的翻唱歌曲，NHK指定了《被生命厭惡著。》作為表演曲目。</p>'
    ContentText.innerHTML += '<h1>推薦曲目:それを愛と呼ぶだけ</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/bMwLJHWP1UE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    ContentText.innerHTML += '<p>橋本環奈×浜辺美波出演的NTT DOCOMO學生折扣廣告的主題曲，同時在Twitter也有#高校生300万人の最高にエモい、以此首歌為製作素材的畢業多媒體投稿活動。</p>'
}

function SnowMan() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += '<img src = SnowMan1.jpg width="640"/>'
    ContentText.innerHTML += '<h1>Snow Man<h1>'
    ContentText.innerHTML += '<p>日本傑尼斯事務所旗下的9人男子偶像團體，於2020年1月22日發行單曲出道，所屬唱片公司為傑尼斯和avex trax合作成立的MENT RECORDING。</p>'
    ContentText.innerHTML += '<h1>出演曲目:D.D.</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/rSD7jb4Xjq8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    ContentText.innerHTML += '<p>「D.D.」為「Dancing Dynamite」的縮寫。</p>'
    ContentText.innerHTML += '<p>由於Snow Man和SixTONES在小傑尼斯時期相互羈絆、關係深遠，因此決定將兩團的出道歌曲互相收錄於對方的出道單曲中。</p>'
}

function 関ジャニ() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += '<img src = 関ジャニ∞1.jpg width="640"/>'
    ContentText.innerHTML += '<h1>関ジャニ∞<h1>'
    ContentText.innerHTML += '<p>日本傑尼斯事務所旗下的男子偶像組合，於2004年9月22日出道，成員皆由關西小傑尼斯中選出。</p>'
    ContentText.innerHTML += '<p>出道時原屬TEICHIKU唱片公司的「歌謠、演歌」部門，第六張單曲「跌跌撞撞男人路」之後，轉為旗下所屬的流行音樂部門「IMPERIAL RECORDS」所屬。2014年8月25日成立自主唱片品牌「INFINITY RECORDS（インフィニティ・レコ―ズ）」[1]。 </p>'
    ContentText.innerHTML += '<h1>出演曲目:Re:LIVE</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/5IZEBOfn6tA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    ContentText.innerHTML += '<p>為関ジャニ∞第44張單曲，在暌違12年後舉辦的47都道府縣的巡迴演唱會中，因新型冠狀病毒的疫情發生，在完成第20個公演後就中斷了巡演。藉此推動了Re:LIVE Project。與粉絲們的「情誼」、「聯繫」為主題，一起共同創作了此曲的歌詞。</p>'
}

function 平井大() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += '<img src = 平井大1.jpg width="640"/>'
    ContentText.innerHTML += '<h1>平井大<h1>'
    ContentText.innerHTML += '<p>日本男創作歌手、烏克麗麗演奏家、吉他手、作詞家、作曲家、編曲家。所屬娛樂事務所是TV Asahi Music。所屬唱片公司是愛貝克思娛樂，廠牌是avex trax。</p>'
    ContentText.innerHTML += '<h1>出演曲目:Stand by me, Stand by you.</h1>'
    ContentText.innerHTML += '<iframe width="640" height="320" src="https://www.youtube.com/embed/Zy_KuTFwot4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    ContentText.innerHTML += '<p>描寫「75億分之1個人與另1個人相戀」的歌詞，唱出因奇蹟般的邂逅而誕生出的普通日常之重要性，成為一首令人印象深刻的寶藏情歌。</p>'
    ContentText.innerHTML += '<h1>推薦曲目:THE GIFT</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/ECe0KBlN0a8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    ContentText.innerHTML += '<p>為日本國民動畫電影『哆啦A夢：大雄的月球探測記』訂製創作的主題曲。</p>'
    ContentText.innerHTML += '<p>在日本發行短短一週立即奪下Apple Music綜合排行榜冠軍，並在日本Oricon公信榜分別獲得數位專輯週間排行榜第六名及專輯合計銷量週間排行榜第10名的優異成績。</p>'
}

function 宮本浩次() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += '<img src = 宮本浩次1.jpg width="640"/>'
    ContentText.innerHTML += '<h1>宮本浩次<h1>'
    ContentText.innerHTML += '<p>日本搖滾樂團ELEPHANT KASHIMASHI主唱、吉他手、音樂製作人。經紀公司為Amuse，唱片公司為日本環球音樂。</p>'
    ContentText.innerHTML += '<h1>出演曲目:夜明けのうた</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/MbT2_QH0db0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    ContentText.innerHTML += '<p>東京電視台2002年播放的紀錄片『日経スペシャル ガイアの夜明け』的片尾曲，詞曲皆為宮本浩次創作。</p>'
}

function 藤井風() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += '<img src = 藤井風1.png width="640"/>'
    ContentText.innerHTML += '<h1>藤井風<h1>'
    ContentText.innerHTML += '<p>藤井風是一名日本男性創作歌手。童年時因父親影響而接觸音樂，三歲開始學鋼琴，並從中學開始在YouTube上傳翻彈鋼琴與翻唱歐美流行歌曲的影片。</p>'
    ContentText.innerHTML += '<p>曾在高中時擔任合唱團的伴奏，得到音樂老師的鼓勵後，決定往音樂發展。</p>'
    ContentText.innerHTML += '<p>第一個在紅白上穿拖鞋表演的歌手。</p>'
    ContentText.innerHTML += '<h1>出演曲目:きらり</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/TcLLpZBWsck" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    ContentText.innerHTML += '<p>於2021年5月在HEHN RECORDS / UNIVERSAL SIGMA發布，作為Honda『VEZEL』的廣告曲。</p>'
    ContentText.innerHTML += '<h1>推薦曲目:旅路</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/29p8FvT_puU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    ContentText.innerHTML += '<p>日本朝日電視台於2021年1月開播的日劇『虹色病例簿』的主題曲，MV中的場景為藤井風的高中母校。</p>'
}
function 鈴木雅之() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += '<img src = 鈴木雅之1.webp width="640"/>'
    ContentText.innerHTML += '<h1>鈴木雅之<h1>'
    ContentText.innerHTML += '<p>鈴木雅之是日本男歌手，有「ラブソングの王様」之稱。出身於東京都大田區大森西。</p>'
    ContentText.innerHTML += '<h1>出演曲目:め組のひと</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/rWQojR1OsAo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    ContentText.innerHTML += '<p>鈴木雅之早期組成的團體『ラッツ&スター』時期發表的作品，他們將臉塗黑表演，歌曲也模仿充滿黑人風的搖擺歡樂氣息。</p>'
    ContentText.innerHTML += '<h1>推薦曲目:DADDY! DADDY! DO! feat. 鈴木愛理</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/2Od7QCsyqkE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    ContentText.innerHTML += '<p>鈴木雅之於2020年發表的第40張單曲，鈴木愛理客串伴唱，為電視動畫《輝夜姬想讓人告白～天才們的戀愛頭腦戰～》第二季的主題曲。</p>'
    ContentText.innerHTML += '<p>因為出道39年來首次主唱動畫歌曲，被稱為「動畫歌曲界的大型新人」。</p>'
}

function ゆず() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += '<img src = ゆず1.jpg width="640"/>'
    ContentText.innerHTML += '<h1>ゆず<h1>'
    ContentText.innerHTML += "<p>日本的一個二人樂團，出身於神奈川縣橫濱市磯子區岡村。TOY'S FACTORY的關聯公司SENHA & Co.所屬。主要成員是北川悠仁和岩澤厚治。</p>"
    ContentText.innerHTML += '<h1>出演曲目:虹</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/v6OGBzOtZr8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    ContentText.innerHTML += '<p>柚子樂隊的第29張單曲。2009年9月2日由其所屬公司Senha&Company發售。</p>'
}

function 星野源() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += '<img src = 星野源1.jpg width="640"/>'
    ContentText.innerHTML += '<h1>星野源<h1>'
    ContentText.innerHTML += '<p>日本男性創作歌手、演員及作家，埼玉縣川口市出身。經紀公司分屬於Amuse（音樂合約）、大人計畫（演員合約）。</p>'
    ContentText.innerHTML += '<p>由於2021年在社交媒體宣布跟女演員新垣結衣結婚，成為紅白直播間唯一噓聲大於掌聲的歌手。</p>'
    ContentText.innerHTML += '<h1>出演曲目:不思議</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/ilnLczvLGAY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    ContentText.innerHTML += '<p>星野源第12張單曲，為日劇『着飾る恋には理由があって』主題曲，睽違三年半的新作品。</p>'
    ContentText.innerHTML += '<h1>推薦曲目:恋</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/jhOVibLEDhA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    ContentText.innerHTML += '<p>星野源的第9首單曲，2016年10月5日由勝利娛樂旗下的SPEEDSTAR RECORDS發行，是星野源與新垣結衣主演電視劇《月薪嬌妻》主題曲。</p>'
    ContentText.innerHTML += '<p>得過無數日本音樂排行榜冠軍，至今仍為星野源撥放數最高的歌曲。</p>'
}

function BUMPOFCHICKEN() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += '<img src = BUMPOFCHICKEN1.jpg width="640"/>'
    ContentText.innerHTML += '<h1>BUMP OF CHICKEN<h1>'
    ContentText.innerHTML += "<p>BUMP OF CHICKEN是日本搖滾樂團，簡稱「バンプ」、「BUMP」、「BOC」、「棒棒雞」，於1994年以主唱藤原基央為中心組成，1999年在主流歌壇出道。所屬唱片公司為TOY'S FACTORY。</p>"
    ContentText.innerHTML += '<p>團名有「弱者的反擊」之意。 </p>'
    ContentText.innerHTML += '<h1>出演曲目:なないろ</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/ZvFs03X944E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    ContentText.innerHTML += '<p>2021年5月發布的第16張單曲，作為NHK連續電視小說『おかえりモネ』的主題曲。</p>'
    ContentText.innerHTML += '<h1>推薦曲目:天体観測</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/j7CDb610Bg0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    ContentText.innerHTML += '<p>BUMP OF CHICKEN於2001年發布的第3張單曲，是關西富士電視台的同名電視劇的插曲。</p>'
}

function 氷川きよし() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += '<img src = 氷川きよし1.jpg width="640"/>'
    ContentText.innerHTML += '<h1>氷川きよし<h1>'
    ContentText.innerHTML += "<p>本名山田清志，是一名日本男性演歌歌手，出生於福岡縣福岡市。目前所屬唱片公司為日本古倫美亞。</p>"
    ContentText.innerHTML += '<p>冰川清志的形象自2019年開始轉向中性打扮，同時也開始改留長頭髮，2021年起，冰川在多場的演唱會及公開演出中，更開始以女性打扮及服飾登台，雖然目前為止，他仍沒有公開表示過自己的性傾向。</p>'
    ContentText.innerHTML += '<h1>出演曲目:歌は我が命</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/BLuysI2ellI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    ContentText.innerHTML += '<p>原唱為美空ひばり，由吉田旺負責作詞，井上かつお作曲，平成19年發售的曲子。</p>'
}

function 布袋寅泰() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += '<img src = 布袋寅泰1.jpeg width="640"/>'
    ContentText.innerHTML += '<h1>布袋寅泰<h1>'
    ContentText.innerHTML += "<p>日本搖滾音樂家、吉他手，出身於群馬縣高崎市江木町。他曾擔任BOØWY等搖滾樂團的吉他手而聞名，BOØWY解散後以個人名義在樂壇活動，2012年移居倫敦並擔任自身經紀公司DADA MUSIC的CEO。</p>"
    ContentText.innerHTML += '<h1>出演曲目:さらば青春の光</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/fGpQuqw7vR4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    ContentText.innerHTML += '<p>1993年自EMI音樂發布的第6張單曲，為TBS周日劇場『課長サンの厄年』的主題曲，詞曲皆為自己負責。</p>'
    ContentText.innerHTML += '<h1>推薦曲目:バンビーナ</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/G4zbSlU9XFY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    ContentText.innerHTML += '<p>負責作詞的森雪之丞在聽了DEMO音檔後，表示「デモ・テープを聴いた時、遊園地のアトラクション的疾走感にぶったまげたと同時に、布袋君の測り知れないキャパシティの広さに感動を覚えた。」。</p>'
}

function 福山雅治() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += '<img src = 福山雅治1.png width="640"/>'
    ContentText.innerHTML += '<h1>福山雅治<h1>'
    ContentText.innerHTML += '<p>日本男性創作歌手、演員、電台DJ、攝影師，出生於長崎，並擔任長崎故鄉大使。所屬經紀公司為AMUSE，所屬唱片公司為環球音樂。</p>'
    ContentText.innerHTML += '<p>除了早期剛出道時的少數作品，福山雅治的音樂詞曲都由他本人創作，根據日本Oricon統計，截至2017年9月，福山雅治的音樂作品總銷量達到2410萬張，為日本歷代男性獨唱歌手的銷量冠軍。</p>'
    ContentText.innerHTML += '<h1>出演曲目:道標</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/JYW__3jgkxU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    ContentText.innerHTML += '<p>2009年迎來出道20週年的福山雅治，創作了融入對敬愛的祖母的思念的新曲，同曲是日本電視台報道節目《NEWS ZERO》的主題曲。</p>'
    ContentText.innerHTML += '<h1>推薦曲目:恋</h1>'
    ContentText.innerHTML += '<iframe width="640" height="360" src="https://www.youtube.com/embed/g2REisKOrOc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    ContentText.innerHTML += '<p>福山雅治第25張單曲，由日本環球音樂製作並販售，同時也作為東芝液晶電視《REGZA》廣告曲。</p>'
}

function Home(){
    ContentText.setAttribute("style","font-size: 20px;background-color: #ffffff;background-image: linear-gradient(90deg, #ffffff 0%, #fbc2c2 100%);text-align: center;margin-left: 25%;padding:calc(100%/24); width: calc(100%/12*6);background-color: white;text-align: center;margin-left: 25%;padding:calc(100%/24); width: calc(100%/12*6);")
    ContentText.innerHTML = '<p>《NHK紅白歌合戰》（日語：NHK紅白歌合戦／エヌエイチケイこうはくうたがっせん）<br>日本放送協會（NHK）自1951年起每年播出一次的音樂特別節目，以現場直播的方式同時在NHK的電視與電台頻道，向日本全國以及全世界播出。節目名中的「紅白」來源於日本劍道中紅白對抗的概念，而紅白歌合戰的紅白則是將女性、男性歌手分為紅、白兩組，並以歌曲對抗賽的形式進行。</p>';

}
window.addEventListener( "load", start, false );