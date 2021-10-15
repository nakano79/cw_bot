function response(room, msg, sender, isGroupChat, replier, imageDB, packageName){

    if (msg == "CW봇"){
        replier.reply ("안녕하세요 보다 더 편리한 학교생활을 위해 만들어진 CW봇 입니다.");
        java.lang.Thread.sleep(1*1000)
          replier.reply ("현재 버전은 1.0.0 B 입니다.");
    }
    
    if (msg == "CW도움말"){
        replier.reply ("다음은 이 봇이 지원하는 명령어입니다.\n\nCW현재시간:현재시간을 알려줍니다.\nCW중식검색 (학교이름)=(날짜):중식 일정을 불러옵니다.\nCW시간표:요일에 맞는 시간표를 불러옵니다.\nCW(한영/영한/한중/중한/한일/일한/한독/독한) (번역 할 단어/문장):단어나 문장을 해당 언어로 변환합니다.\nCW봇:봇의 정보를 불러옵니다.\n");
    }
    
    if (msg == "CW현재시간"){
        var dt = new Date();
        var year = dt.getFullYear();
        var month = (dt.getMonth()+1);
        var date = dt.getDate();
    
        var hour = dt.getHours();
        var minutes = dt.getMinutes();
        var seconds = dt.getSeconds();
    
        var day = dt.getDay();
        var week = new Array('SUN','MON','TUE','WED','THU','FRI','SAT');
        
        replier.reply("현재시간은 " +year+ "년 " +month+ "월 " +date+ "일 " +"("+week[day]+")\n" +hour+ "시 " +minutes+ "분 " +seconds+ "초 입니다");
    }
    
    if (msg.indexOf("CW한영")==0){
        var og=msg.replace("CW한영","");
        var nw=Api.papagoTranslate("ko","en",og);
        replier.reply(nw);
    }
    
    if (msg.indexOf("CW영한")==0){
        var og=msg.replace("CW영한","");
        var nw=Api.papagoTranslate("en","ko",og);
        replier.reply(nw);
    }
    
    if (msg.indexOf("CW한일")==0){
        var og=msg.replace("CW한일","");
        var nw=Api.papagoTranslate("ko","ja",og);
        replier.reply(nw);
    }
    
    if (msg.indexOf("CW일한")==0){
        var og=msg.replace("CW일한","");
        var nw=Api.papagoTranslate("ja","ko",og);
        replier.reply(nw);
    }
    
    if (msg.indexOf("CW한독")==0){
        var og=msg.replace("CW한독","");
        var nw=Api.papagoTranslate("ko","de",og);
        replier.reply(nw);
    }
    
    if (msg.indexOf("CW독한")==0){
        var og=msg.replace("CW독한","");
        var nw=Api.papagoTranslate("de","ko",og);
        replier.reply(nw);
    }
    
    if (msg.indexOf("CW한중")==0){
        var og=msg.replace("CW한중","");
        var nw=Api.papagoTranslate("ko","zh-CN",og);
        replier.reply(nw);
    }
    
    if (msg.indexOf("CW중한")==0){
        var og=msg.replace("CW중한","");
        var nw=Api.papagoTranslate("zh-CN","ko",og);
        replier.reply(nw);
    }
    
        try {
        if (msg.indexOf("CW중식검색")==0){ 
            var cut = msg.substring(6,msg.length)
            var cut2 = cut.split("=")
            var ct1 = cut2[0]
            var ct2 = cut2[1]
        
            var day = new Date(); 
            var gmon = (day.getMonth() + 1); 
      
        
            var pap = (gmon+"월 "+ct2+"일 [중식]");
            var u=Utils.getWebText("http://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query="+ ct1 + "+급식");
            var a=u.split(pap+"</strong>"); 
            var b=a[1].split("</ul>");
            b = b[0].replace(/(<([^>]+)>)/g, "");
            replier.reply("["+ct1+"]\n"+pap+"입니다.\n"+b+"\n※숫자는 알레르기 식별 번호입니다.※\n\n1.난류 2.우유 3.메밀 4.땅콩 5.대두 6.밀 7.고등어 8.게 9.새우 10.돼지고기 11.복숭아 12.토마토 13.아황산류 14.호두 15.닭고기 16.쇠고기 17.오징어 18.조개류(굴,전복,홍합 포함)"); 
        } 
    }
    catch(e)
    {
        replier.reply("학교 정보가 없거나 식단이 없습니다.");
    }
    
    var r = {"Sun":"일요일", "Mon":"월요일", "Tue":"화요일", "Wed":"수요일", "Thu":"목요일", "Fri":"금요일", "Sat":"토요일"}
    var dat = String(new Date()).split(' ')[0]

}
    
