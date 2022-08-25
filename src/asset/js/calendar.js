/*--------------------------------
	カレンダー
--------------------------------*/
// // 取得したい年月設定（とりあえずPC時間の今日の年月）
// var y = new Date().getFullYear();
// var m = new Date().getMonth() + 1;
// // 初期設定
// // 閏年チェック
// var feb_date = y % 4 == 0 && y % 100 != 0 ? 29 : 28;
// if (y % 400 == 0) {
//   feb_date = 29;
// }
// var month_count = { 1: 31, 2: feb_date, 3: 31, 4: 30, 5: 31, 6: 30, 7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31 };
// //曜日の文字列設定
// var day_en = { d0: "sun", d1: "mon", d2: "the", d3: "wed", d4: "thu", d5: "fri", d6: "sat" };
// // 月の0付き表示設定（例：1月であれば「01」） ""内に0 or 空白を記載
// var m_display = m < 10 ? "" + String(m) : m;
// // その年月の最終日は何曜日かを設定
// var last_day = new Date(y, m - 1, month_count[m]).getDay();
// // その年月の1日は何曜日か、第1週目で、1日であることを設定
// var first_day = new Date(y, m - 1, 1).getDay();
// var w = 1;
// var d = first_day;
// // マークアップ生成
// var txt = "";
// txt += "<h1>" + y + "年" + m_display + "月</h1>";
// txt += '<table summary="' + y + "年" + m_display + '月のカレンダー" class="calendar month' + m + '">';
// txt += "<tr>";
// txt += "<th>日</th>";
// txt += "<th>月</th>";
// txt += "<th>火</th>";
// txt += "<th>水</th>";
// txt += "<th>木</th>";
// txt += "<th>金</th>";
// txt += "<th>土</th>";
// txt += "</tr>";
// txt += '<tr class="week1">';

// //その年月の1日がはじまる曜日までのセル生成
// for (var j = 0; j < first_day; j++) {
//   txt += "<td>-</td>";
// }
// //その年月の日数分ループ処理
// for (var i = 1; i <= month_count[m]; i++) {
//   //土曜日と日曜日の間の処理
//   if (d != 0 && (first_day + i) % 7 == 1) {
//     w++; //第何週か
//     d = 0; //曜日、日曜にリセット
//     txt += "</tr>";
//     txt += '<tr class="week' + w + '">';
//   }
//   //日の0付き表示設定（例：1日であれば「01」）
//   var i_display = i < 10 ? "" + String(i) : i;
//   day_count = i % 7 == 0 ? Math.floor(i / 7) : Math.floor(i / 7) + 1;
//   txt += '<td id="d' + y + m_display + i_display + '" class="' + day_en["d" + d] + day_count + " date" + i + '">' + i + "</td>";
//   d++;
// }

// //その年月の最終日以降の空白セル生成
// for (var j = 0; j < 6 - last_day; j++) {
//   txt += "<td>-</td>\n";
// }
// txt += "</tr>";
// txt += "</table>";
// // 書き出し
// document.write(txt);

//----------------------------------//

// Cal3.4.5 / 2014-08-05
// SYNCK GRAPHICA
// charset UTF-8

var calObj = new Array();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//【以下カレンダー0の設定】

// [0]は0番目のカレンダーってことね。
calObj[0] = new Object();

// 曜日スタート // [0] 日 / [1] 月 / [2] 火 / [3] 水 / [4] 木 / [5] 金 / [6] 土
calObj[0].weekStart = 0;

// xヶ月後のカレンダーを初期表示するか (0の場合は当月)
calObj[0].defaultMonth = 0;

// ["day"] 日付に対してのクラス指定
calObj[0].daysClass = new Object();

// ["xDaysLater"] ○日後のクラス指定
calObj[0].xDaysLater = new Array();

// 2022年祝日設定（12月まで）
calObj[0].daysClass["1/1"] = "Holyday";
calObj[0].daysClass["2/11"] = "Holyday";
calObj[0].daysClass["2/23"] = "Holyday";
calObj[0].daysClass["3/21"] = "Holyday";
calObj[0].daysClass["4/29"] = "Holyday";
calObj[0].daysClass["5/3"] = "Holyday";
calObj[0].daysClass["5/4"] = "Holyday";
calObj[0].daysClass["5/5"] = "Holyday";
calObj[0].daysClass["7/18"] = "Holyday";
calObj[0].daysClass["8/11"] = "Holyday";
calObj[0].daysClass["8/12"] = "Holyday";
calObj[0].daysClass["8/13"] = "Holyday";
calObj[0].daysClass["8/14"] = "Holyday";
calObj[0].daysClass["8/15"] = "Holyday";
calObj[0].daysClass["9/19"] = "Holyday";
calObj[0].daysClass["9/23"] = "Holyday";
calObj[0].daysClass["10/10"] = "Holyday";
calObj[0].daysClass["11/3"] = "Holyday";
calObj[0].daysClass["11/23"] = "Holyday";

calObj[0].daysClass["12/29"] = "Holyday";
calObj[0].daysClass["12/30"] = "Holyday";
calObj[0].daysClass["12/31"] = "Holyday";
// calObj[0].daysClass["1/2"] = 'Holyday';
// calObj[0].daysClass["1/3"] = 'Holyday';
// calObj[0].daysClass["1/4"] = 'Holyday';
// calObj[0].daysClass["1/5"] = 'Holyday';

// ["xDay"] 毎月○日のクラス指定
calObj[0].xDays = new Array();

// ["week"] 毎週○曜日の場合
calObj[0].week = new Array();
calObj[0].week[0] = "Sun"; // Sun
calObj[0].week[1]; // Mon
calObj[0].week[2]; // Tue
calObj[0].week[3]; // Wed
calObj[0].week[4]; // Thu
calObj[0].week[5]; // Fri
calObj[0].week[6] = "Sat"; // Sat

// (○月) 第× △曜日の場合
calObj[0].month = new Object();
// 毎月「曜日-第○」 日:0 / 月:1 / 火:2 / 水:3 / 木:4 / 金:5 / 土:6
// 固定月「月-曜日-第○」 日:0 / 月:1 / 火:2 / 水:3 / 木:4 / 金:5 / 土:6
calObj[0].month["1-1-2"] = "Holyday"; // 1月 月曜日(1) 第2 ということね。
calObj[0].month["7-1-3"] = "Holyday"; // 7月 月曜日(1) 第3 ということね。
calObj[0].month["9-1-3"] = "Holyday"; // 9月 月曜日(1) 第3 ということね。
// calObj[0].month["10-1-2"] = 'Holyday';  10月 月曜日(1) 第2 ということね。

// ["backward"] 過去の日付のクラス名(指定しない場合はnull)
calObj[0].backward = "backward";

// カレンダーをクリックできるようにする場合 (有効 : true / 無効 : false)
// クラス指定でURLが指定されている場合はそっちが優先されます。
calObj[0].click = false;

// クリックした時に開くURL ( _YEAR_ : 年 / _MONTH_ : 月 / _DAY_ : 日 )
calObj[0].clickURI = "";

// クリック可能にしたいクラス名 (すべての日をクリック可能にする場合は空にしてください)
// Holyday と指定した場合はclassがHolyday指定された日付だけクリックできるようになります。
calObj[0].clickClassName = "";

// クリック不許可にしたいクラス名
calObj[0].clickDisabledClassName = "Sun";

// 優先度 クラス指定する順番が変わります。
calObj[0].priority = new Array("week", "xDay", "xDaysLater", "day", "backward");

//【カレンダー0の設定はここまで】

// [0]のカレンダーを[1]にコピーしてちょっと修正する。
calObj[1] = new Object();
calObj[1] = cal_clone(calObj[0]);
calObj[1].defaultMonth = 1; //翌月から表示ってことね。
calObj[1].weekStart = 0;

// カレンダー1の設定はここまで

//sidebarのカレンダー
calObj[2] = new Object();
calObj[2] = cal_clone(calObj[0]);
calObj[2].weekStart = 0;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 以下、さわらぬ神にたたりなし
calObj.calendars = new Array();
calObj.days = new Array(0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
calObj.weekName = new Array("日", "月", "火", "水", "木", "金", "土");
calObj.monthName = new Array("", "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月");
calObj.date = new Date();
calObj.date = new Date(calObj.date.getFullYear() + "/" + (calObj.date.getMonth() + 1) + "/" + calObj.date.getDate() + " 00:00:00");
calObj.day = calObj.date.getDate();
calObj.month = calObj.date.getMonth() + 1;
calObj.year = calObj.date.getFullYear();
calObj.currentList = null;

function cal_init() {
  var d = window.document;
  var tagObj = d.getElementsByTagName("div");
  var calToday = new Date();
  for (var i = 0; i < tagObj.length; i++) {
    if (tagObj[i].className == "c-calendar") {
      var calId = Number(tagObj[i].id.substring(3, tagObj[i].id.length));
      calObj.calendars.push(calId);
      if (0 < calObj.month + calObj[calId].defaultMonth && calObj.month + calObj[calId].defaultMonth < 13)
        calObj[calId].currentMonth = new Date(calObj.year + "/" + (calObj.month + calObj[calId].defaultMonth) + "/" + "1 00:00:00");
      else calObj[calId].currentMonth = new Date(calObj.year + 1 + "/" + ((calObj.month + calObj[calId].defaultMonth) % 12) + "/" + "1 00:00:00");
      cal_create(calId);
    }
  }
}
function cal_create(calId) {
  var d = window.document;
  var day = calObj[calId].currentMonth.getDate();
  var month = calObj[calId].currentMonth.getMonth() + 1;
  var year = calObj[calId].currentMonth.getFullYear();
  var week = calObj[calId].currentMonth.getDay();
  var time = calObj[calId].currentMonth.getTime();
  var tdTextListArr = new Array();
  var bisDay = 0;
  var MonthDays = calObj.days[month];
  var WeekCnt = new Array();
  var calendarHash = [];
  if (month == 2) {
    if (year % 100 == 0 || year % 4 != 0) {
      if (year % 400 != 0) {
        bisDay = 0;
      } else {
        bisDay = 1;
      }
    } else if (year % 4 == 0) {
      bisDay = 1;
    } else {
      bisDay = 0;
    }
  }
  MonthDays += bisDay;
  var calHTML = "<table border='0' cellspacing='0' cellpadding='0' class='cal'>";
  calHTML += "<tr><th colspan='7'>";
  calHTML += "<div class='cal_ui'>";
  //   calHTML += "<input type='button' onclick='cal_move(" + calId + ",-1);' value='&lt; prev' />";
  //   calHTML += "<input type='button' onclick='cal_move(" + calId + ",null);' value='-' />";
  //   calHTML += "<input type='button' onclick='cal_move(" + calId + ",1);' value='next &gt;' />";
  calHTML += "</div>";
  calHTML += "<p>" + year + "年" + calObj.monthName[month] + "</p></th></tr>";
  calHTML += "<tr class='headline'>";
  for (var i = 0; i < 7; i++) {
    var w = (calObj[calId].weekStart + i) % 7;
    calHTML += "<td>" + calObj.weekName[w] + "</td>";
  }
  calHTML += "</tr><tr>";
  var weekBreak = (calObj[calId].weekStart - 1) % 7;
  if (weekBreak < 0) {
    weekBreak = 6;
  }
  var ws = week;
  var i = 0;
  var weekBlank = [];
  while (ws != calObj[calId].weekStart) {
    var t = new Date(time - (i + 1) * (60 * 60 * 24 * 1000));
    weekBlank.unshift('<td><div class="backward">' + t.getDate() + "</div></td>");
    i++;
    ws--;
    if (ws < 0) {
      ws = 6;
    }
  }
  calHTML += weekBlank.join("");

  for (dayCnt = 1; dayCnt <= calObj.days[month] + bisDay; dayCnt++) {
    var dayStr = year + "/" + month + "/" + dayCnt;
    var dayStrN = month + "/" + dayCnt;
    if (WeekCnt[week] == undefined) WeekCnt[week] = 0;
    WeekCnt[week]++;

    var monStr = "" + month + "-" + week + "-" + WeekCnt[week];
    var weekStr = "" + week + "-" + WeekCnt[week];

    var dayClass = new Object();
    var dayClassText = new Object();
    var currentDayDate = new Date(year + "/" + month + "/" + dayCnt + " 00:00:00");
    var laterDay = Math.floor((currentDayDate.getTime() - calObj.date.getTime()) / 1000 / (60 * 60 * 24));
    var tdId = "td_" + calId + "_" + year + "_" + month + "_" + dayCnt;

    // backward
    if (calObj[calId].backward != null && currentDayDate.getTime() < calObj.date.getTime()) dayClass["backward"] = calObj[calId].backward;

    // week
    if (calObj[calId].month[weekStr] != undefined) dayClass["week"] = calObj[calId].month[weekStr];
    else if (calObj[calId].month[monStr] != undefined) dayClass["week"] = calObj[calId].month[monStr];
    else if (calObj[calId].week[week] != undefined) {
      if (typeof calObj[calId].week[week] == "object" && calObj[calId].week[week][WeekCnt[week]] != undefined) {
        dayClass["week"] = calObj[calId].week[week][WeekCnt[week]];
      } else if (calObj[calId].week[week] != undefined && typeof calObj[calId].week[week] != "object") dayClass["week"] = calObj[calId].week[week];
    }
    // xDay
    if (calObj[calId].xDays[dayCnt] != undefined) dayClass["xDay"] = calObj[calId].xDays[dayCnt];

    // xDaysLater
    if (calObj[calId].xDaysLater[laterDay] != undefined) dayClass["xDaysLater"] = calObj[calId].xDaysLater[laterDay];

    // day
    if (calObj[calId].daysClass[dayStr] != undefined) dayClass["day"] = calObj[calId].daysClass[dayStr];
    else if (calObj[calId].daysClass[dayStrN] != undefined) dayClass["day"] = calObj[calId].daysClass[dayStrN];

    var tdClassArr = new Array();
    var tdTextArr = new Array();
    var tdLinkArr = new Array();
    var tdClassStr = "";
    var tdTextStr = "";
    var tdMouse = "";
    var tdClassNames = new Object();
    for (var ci = 0; ci < calObj[calId].priority.length; ci++) {
      if (dayClass[calObj[calId].priority[ci]] != undefined) {
        var splitArr = new Array();
        splitArr = dayClass[calObj[calId].priority[ci]].split(";");
        tdClassArr.push(splitArr[0]);
        tdClassNames[splitArr[0]] = true;
        if (splitArr[1] != undefined) {
          tdTextArr.push(splitArr[1]);
          var tdTextListLink = "";
          if (splitArr[2] != undefined) tdTextListLink = " onclick=\"cal_open('" + splitArr[2] + "')\"";
          tdTextListArr.push(
            '<ol><li id="' + tdId + '_li" onmouseover="cal_list2day_over(this)" onmouseout="cal_list2day_out(this)" value="' + dayCnt + '"' + tdTextListLink + ">" + splitArr[1] + "</li></ol>"
          );
        }
        if (splitArr[2] != undefined) tdLinkArr.push(splitArr[2]);
      }
    }
    if (tdTextArr.length > 0) {
      tdTextStr = "<span id='" + tdId + "'>";
      for (var i = 0; i < tdTextArr.length; i++) {
        tdTextStr += tdTextArr[i] + "<br />";
      }
      tdTextStr += "</span>";
      tdMouse = " onmouseover=\"cal_disp_text('" + tdId + "')\" onmouseout=\"cal_hide_text('" + tdId + "')\"";
      tdClassArr.push("pointer");
    }
    if (tdLinkArr.length > 0) tdMouse += " onclick=\"cal_open('" + tdLinkArr[0] + "')\"";
    else if (calObj[calId].click) {
      var clickOpenURI = calObj[calId].clickURI;
      clickOpenURI = clickOpenURI.replace(/_YEAR_/gi, year);
      clickOpenURI = clickOpenURI.replace(/_MONTH_/gi, month);
      clickOpenURI = clickOpenURI.replace(/_DAY_/gi, dayCnt);
      if ((calObj[calId].clickClassName != "" && tdClassNames[calObj[calId].clickClassName]) || calObj[calId].clickClassName == "") {
        if (!tdClassNames[calObj[calId].clickDisabledClassName]) {
          tdMouse += " onclick=\"cal_open('" + clickOpenURI + "')\"";
          tdClassArr.push("pointer");
        }
      }
    }
    if (tdClassArr.length > 0) tdClassStr = " class='" + tdClassArr.join(" ") + "'";
    calHTML += "<td id='" + tdId + "_td'><div" + tdClassStr + tdMouse + ">" + dayCnt + tdTextStr + "</div></td>";
    if (week == weekBreak) {
      calHTML += "</tr>";
      if (dayCnt < calObj.days[month]) {
        calHTML += "<tr>";
      }
    }
    week++;
    week = week % 7;
  }
  var nd = 0;
  while (week != calObj[calId].weekStart) {
    nd++;
    calHTML += '<td><div class="backward">' + nd + "</div></td>";
    week++;
    week = week % 7;
  }
  calHTML += "</table>";
  d.getElementById("cal" + calId).innerHTML = calHTML;

  // list
  if (d.getElementById("schedule" + calId)) {
    d.getElementById("schedule" + calId).innerHTML = "";
    if (tdTextListArr.length > 0 && d.getElementById("schedule" + calId)) {
      d.getElementById("schedule" + calId).innerHTML = tdTextListArr.join("");
    }
  }
  // /list
}
function cal_list2day_over(obj) {
  var d = window.document;
  var dayId = obj.id.substring(0, obj.id.indexOf("_li"));
  if (d.getElementById(calObj.currentList)) d.getElementById(calObj.currentList).style.backgroundColor = "#FFF";
  calObj.currentList = dayId + "_td";
  if (d.getElementById(dayId + "_td")) d.getElementById(dayId + "_td").style.backgroundColor = "#CCC";
}
function cal_list2day_out(obj) {
  var d = window.document;
  var dayId = obj.id.substring(0, obj.id.indexOf("_li"));
  if (d.getElementById(calObj.currentList)) d.getElementById(calObj.currentList).style.backgroundColor = "#FFF";
}
function cal_open(uri) {
  window.open(uri);
}
function cal_disp_text(textId) {
  var d = window.document;
  if (navigator.userAgent.indexOf("MSIE") == -1) d.getElementById(textId).style.display = "block";
}
function cal_hide_text(textId) {
  var d = window.document;
  d.getElementById(textId).style.display = "none";
}

function cal_move(calId, m) {
  if (m == null) calObj[calId].currentMonth = new Date(calObj.year + "/" + calObj.month + "/" + "1 00:00:00");
  else {
    var day = calObj[calId].currentMonth.getDate();
    var month = calObj[calId].currentMonth.getMonth() + 1;
    var year = calObj[calId].currentMonth.getFullYear();
    if (0 < month + m && month + m < 13) calObj[calId].currentMonth = new Date(year + "/" + (month + m) + "/" + "1 00:00:00");
    else if (month + m < 1) {
      year--;
      month = 12;
      calObj[calId].currentMonth = new Date(year + "/" + month + "/" + "1 00:00:00");
    } else {
      year++;
      month = 1;
      calObj[calId].currentMonth = new Date(year + "/" + month + "/" + "1 00:00:00");
    }
  }
  cal_create(calId);
}
function cal_clone(obj) {
  var dest;
  if (typeof obj == "object") {
    if (obj instanceof Array) {
      dest = new Array();
      for (i = 0; i < obj.length; i++) dest[i] = cal_clone(obj[i]);
    } else {
      dest = new Object();
      for (prop in obj) dest[prop] = cal_clone(obj[prop]);
    }
  } else dest = obj;
  return dest;
}
function cal_getMonth() {}
cal_init();
