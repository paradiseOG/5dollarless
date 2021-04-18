UI.AddSubTab( ["Visuals", "SUBTAB_MGR"], "Clantags");
    UI.AddDropdown( ["Visuals", "Clantags", "SHEET_MGR", "Clantags"], "Clantags",["None","5dollarless"],1);
    UI.AddSliderInt(["Visuals","Clantags","Clantags"], "Clantag Speed", 2,14 );
    var today = new Date();
    var datetime = today.getHours() + ":" + today.getMinutes() + ":" + (today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds());
    var lasttime = 0;
    function onRender( )
    {
        var tag = UI.GetValue( ["Visuals","Clantags","Clantags", "Clantags"] );
        var speed = UI.GetValue( ["Visuals","Clantags","Clantags"] );
        var time = parseInt((Globals.Curtime() * speed))
        var realtime = Global.Tickrate()
        if (time != lasttime)
        {
            if(tag == 0) { Local.SetClanTag(""); }
            if(tag == 1)
                {
                switch((time) % 23)
                {
		case 1:{ Local.SetClanTag(""); break; }
                case 2:{ Local.SetClanTag("5"); break }
                case 3:{ Local.SetClanTag("5d"); break; }
                case 4:{ Local.SetClanTag("5do"); break; }
                case 5:{ Local.SetClanTag("5dol"); break; }
                case 6:{ Local.SetClanTag("5doll"); break; }
                case 7:{ Local.SetClanTag("5dolla"); break; }
                case 8:{ Local.SetClanTag("5dollar"); break; }
                case 9:{ Local.SetClanTag("5dollarl"); break; }
                case 10:{ Local.SetClanTag("5dollarle"); break; }
                case 11:{ Local.SetClanTag("5dollarles"); break; }
                case 12:{ Local.SetClanTag("5dollarless"); break; }
                case 13:{ Local.SetClanTag("5dollarles"); break; }
                case 14:{ Local.SetClanTag("5dollarle"); break; }
                case 15:{ Local.SetClanTag("5dollarl"); break; }
                case 16:{ Local.SetClanTag("5dollar"); break; }
                case 17:{ Local.SetClanTag("5dolla"); break; }
                case 18:{ Local.SetClanTag("5doll"); break; }
                case 19:{ Local.SetClanTag("5dol"); break; }
                case 20:{ Local.SetClanTag("5do"); break; }
                case 21:{ Local.SetClanTag("5d"); break; }
                case 22:{ Local.SetClanTag("5"); break; }
                case 23:{ Local.SetClanTag(""); break; }
                }
            }
        }
        lasttime = time;
    }
    Cheat.RegisterCallback("Draw", "onRender");