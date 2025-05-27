const latest = 10;
var latest_news = "";
for (let i = 0; i < latest; ++i) {
    latest_news += "<tr><td width=\"75\" valign=\"top\"><span class=\"style2\">" + data["news"][i]["date"] + 
                    "</span></td><td>" + data["news"][i]["info"] + "</td></tr>";
}

const photos = "\
    <table width=\"900\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"> \
            <tr> \
              <td height=\"14\"><img src=\"./assets/images/title/blank.png\" width=\"35\" height=\"14\" /></td> \
            </tr> \
            <tr> \
              <td colspan=\"2\"><table width=\"900\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"> \
                <tr> \
                  <td height=\"45\"><!-- InstanceBeginEditable name=\"title\" --><img src=\"./assets/images/home/fullname.png\" width=\"704\" height=\"45\" /><!-- InstanceEndEditable --></td> \
                </tr> \
              </table></td> \
            </tr> \
            <tr> \
              <td colspan=\"2\"><table width=\"900\" height=\"300\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\"> \
                <tr> \
                  <td width=\"100\" valign=\"top\"><!-- InstanceBeginEditable name=\"corner\" --><img src=\"./assets/images/title/corner_blue.png\" width=\"100\" height=\"30\" /><!-- InstanceEndEditable --></td> \
                  <td valign=\"top\"><!-- InstanceBeginEditable name=\"content\" --> \
                    <table width=\"800\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"> \
                      <tr> \
                        <td valign=\"top\"><table width=\"400\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\"> \
                          <tr> \
                            <td height=\"45\" colspan=\"2\" valign=\"top\"><img src=\"./assets/images/home/aboutalcom.png\" width=\"300\" height=\"40\" /></td> \
                          </tr> \
                          <tr> \
                            <td width=\"10\" rowspan=\"2\"><img src=\"./assets/images/title/blank.png\" width=\"25\" height=\"14\" /></td> \
                            <td width=\"380\"><div align=\"right\"> \
                              <p align=\"left\">The ALCom Lab concerns with Applied Logic and Computation in System Design. It is founded in August 2005. We are cooking an enjoyable research environment and a culture of creativity.<br /> \
                              </p> \
                              </div></td> \
                          </tr> \
                          <tr> \
                            <td><div align=\"right\"><img src=\"./assets/images/home/alcomsign.png\" width=\"288\" height=\"120\" /></div></td> \
                          </tr> \
                        </table> \
                          <br />                </td> \
                        <td width=\"400\" valign=\"top\"><div align=\"right\"><img src=\"./assets/images/home/photo.png\" width=\"392\" height=\"229\" /></div></td> \
                      </tr> \
                       \
                      <tr> \
                        <td colspan=\"2\" valign=\"top\"><table width=\"600\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\"> \
                          <tr> \
                            <td height=\"45\" colspan=\"2\" valign=\"top\"><img src=\"./assets/images/home/latestnews.png\" width=\"300\" height=\"40\" /></td> \
                          </tr> \
                          <tr> \
                            <td width=\"10\"><img src=\"./assets/images/title/blank.png\" width=\"25\" height=\"14\" /></td> \
                            <td width=\"580\"><div align=\"left\"> \
                             \
                              <table width=\"580\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"> \
";
const end = "\
                              </table> \
                            </div></td> \
                          </tr> \
                           \
                        </table></td> \
                        </tr> \
                      <tr> \
                        <td colspan=\"2\" valign=\"top\"><br /> \
                        <table width=\"800\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\"> \
                          <tr> \
                            <td height=\"45\" colspan=\"2\" valign=\"top\"><img src=\"./assets/images/home/contactus.png\" width=\"300\" height=\"40\" /></td> \
                            <td rowspan=\"2\" valign=\"bottom\"><div align=\"right\"> \
                              <table width=\"200\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"> \
                                <tr> \
                                  <td><div align=\"right\"> \
                                  <!--<img src=\"cgi-bin/Count.cgi?ft=0&dd=E&df=alcom.dat\" align=\"absmiddle\" />--> </div></td> \
                                  <td width=\"100\"><div align=\"left\"><span class=\"style3\"> since 2007.4.2</span></div></td> \
                                </tr> \
                              </table>  \
                              </div></td> \
                            </tr> \
                          <tr> \
                            <td width=\"25\"><img src=\"./assets/images/title/blank.png\" width=\"25\" height=\"14\" /></td> \
                              <td width=\"550\"> \
                              <!-- begin of contact us  --> \
                               <table width=\"550\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"> \
                         <tr> \
                                 <td width=\"95\"><div align=\"right\"><strong>Postal Address :</strong></div></td> \
                                 <td>&nbsp;Room 526, Ming-Dar Hall, National Taiwan University, Taipei 10617, Taiwan</td> \
                         </tr> \
                                <tr> \
                                 <td width=\"95\"><div align=\"right\"><strong>Phone :</strong></div></td> \
                                 <td>&nbsp;+886-2-3366-9753</td></tr> \
                               </table> \
                              <!-- end of contact us  --> \
                      </td> \
                              </tr> \
                        </table></td></tr> \
                    </table> \
                  <!-- InstanceEndEditable --></td> \
                </tr> \
              </table></td> \
            </tr> \
            <tr> \
              <td height=\"75\" colspan=\"2\" background=\"./assets/images/title/bottom.png\"><table width=\"580\" border=\"0\" align=\"right\" cellpadding=\"0\" cellspacing=\"0\"> \
                  <tr> \
                    <td><div align=\"right\">&copy; 2007 Applied Logic and Computation Laboratory, GIEE, NTU. All rights reserved. </div></td> \
                  </tr> \
                </table></td> \
            </tr> \
          </table> \
";
const more = "<tr>\
                    <td width=\"75\" valign=\"top\"><span class=\"style2\"></span></td>\
                    <td><a href=\"./src/news.html\"><img src=\"./assets/images/home/more.png\" width=\"32\" height=\"10\" border=\"0\" align=\"absbottom\" /></a></td>\
                </tr>"
const inner = photos + latest_news + more + end;

document.getElementById("index_container").innerHTML = inner;