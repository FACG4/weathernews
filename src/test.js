const test = require('tape');
const router = require('./router');
const supertest = require('supertest');

test('Initialise', (t) => {
  const num = 2;
  t.equal(num, 2, 'Tape is working');
  t.end();
});

test('check that status code is 200', (t) => {
  supertest(router)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.error(err);
      t.equal(res.text, '<!DOCTYPE html>\n<html lang="en">\n\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta http-equiv="X-UA-Compatible" content="ie=edge">\n  <link rel="stylesheet" href="/public/css/style.css">\n  <title>News And weather</title>\n</head>\n\n<body>\n  <form method="post" action="/city">\n    <input type="text" class="city" id="city" placeholder="Enter your city">\n    <select name="countryCode" id="">\n      <option data-countryCode="GB" value="44" Selected>UK </option>\n      <option data-countryCode="US" value="1">USA </option>\n      <option data-countryCode="DZ" value="213">Algeria</option>\n      <option data-countryCode="AD" value="376">Andorra </option>\n      <option data-countryCode="AO" value="244">Angola </option>\n      <option data-countryCode="AI" value="1264">Anguilla </option>\n      <option data-countryCode="AG" value="1268">Antigua &amp; Barbuda </option>\n      <option data-countryCode="AR" value="54">Argentina</option>\n      <option data-countryCode="AM" value="374">Armenia </option>\n      <option data-countryCode="AW" value="297">Aruba</option>\n      <option data-countryCode="AU" value="61">Australia </option>\n      <option data-countryCode="AT" value="43">Austria</option>\n      <option data-countryCode="AZ" value="994">Azerbaijan</option>\n      <option data-countryCode="BS" value="1242">Bahamas</option>\n      <option data-countryCode="BH" value="973">Bahrain</option>\n      <option data-countryCode="BD" value="880">Bangladesh </option>\n      <option data-countryCode="BB" value="1246">Barbados </option>\n      <option data-countryCode="BY" value="375">Belarus </option>\n      <option data-countryCode="BE" value="32">Belgium </option>\n      <option data-countryCode="BZ" value="501">Belize </option>\n      <option data-countryCode="BJ" value="229">Benin </option>\n      <option data-countryCode="BM" value="1441">Bermuda</option>\n      <option data-countryCode="BT" value="975">Bhutan </option>\n      <option data-countryCode="BO" value="591">Bolivia </option>\n      <option data-countryCode="BA" value="387">Bosnia Herzegovina </option>\n      <option data-countryCode="BW" value="267">Botswana</option>\n      <option data-countryCode="BR" value="55">Brazil</option>\n      <option data-countryCode="BN" value="673">Brunei</option>\n      <option data-countryCode="BG" value="359">Bulgaria</option>\n      <option data-countryCode="BF" value="226">Burkina Faso</option>\n      <option data-countryCode="BI" value="257">Burundi</option>\n      <option data-countryCode="KH" value="855">Cambodia</option>\n      <option data-countryCode="CM" value="237">Cameroon</option>\n      <option data-countryCode="CA" value="1">Canada</option>\n      <option data-countryCode="CV" value="238">Cape Verde Islands</option>\n      <option data-countryCode="KY" value="1345">Cayman Islands</option>\n      <option data-countryCode="CF" value="236">Central African Republic</option>\n      <option data-countryCode="CL" value="56">Chile</option>\n      <option data-countryCode="CN" value="86">China</option>\n      <option data-countryCode="CO" value="57">Colombia</option>\n      <option data-countryCode="KM" value="269">Comoros</option>\n      <option data-countryCode="CG" value="242">Congo</option>\n      <option data-countryCode="CK" value="682">Cook Islands</option>\n      <option data-countryCode="CR" value="506">Costa Rica</option>\n      <option data-countryCode="HR" value="385">Croatia</option>\n      <option data-countryCode="CU" value="53">Cuba</option>\n      <option data-countryCode="CY" value="90392">Cyprus North </option>\n      <option data-countryCode="CY" value="357">Cyprus South </option>\n      <option data-countryCode="CZ" value="42">Czech Republic (+42)</option>\n      <option data-countryCode="DK" value="45">Denmark (+45)</option>\n      <option data-countryCode="DJ" value="253">Djibouti (+253)</option>\n      <option data-countryCode="DM" value="1809">Dominica (+1809)</option>\n      <option data-countryCode="DO" value="1809">Dominican Republic (+1809)</option>\n      <option data-countryCode="EC" value="593">Ecuador (+593)</option>\n      <option data-countryCode="EG" value="20">Egypt (+20)</option>\n      <option data-countryCode="SV" value="503">El Salvador (+503)</option>\n      <option data-countryCode="GQ" value="240">Equatorial Guinea (+240)</option>\n      <option data-countryCode="ER" value="291">Eritrea (+291)</option>\n      <option data-countryCode="EE" value="372">Estonia (+372)</option>\n      <option data-countryCode="ET" value="251">Ethiopia (+251)</option>\n      <option data-countryCode="FK" value="500">Falkland Islands (+500)</option>\n      <option data-countryCode="FO" value="298">Faroe Islands (+298)</option>\n      <option data-countryCode="FJ" value="679">Fiji (+679)</option>\n      <option data-countryCode="FI" value="358">Finland (+358)</option>\n      <option data-countryCode="FR" value="33">France (+33)</option>\n      <option data-countryCode="GF" value="594">French Guiana (+594)</option>\n      <option data-countryCode="PF" value="689">French Polynesia (+689)</option>\n      <option data-countryCode="GA" value="241">Gabon (+241)</option>\n      <option data-countryCode="GM" value="220">Gambia (+220)</option>\n      <option data-countryCode="GE" value="7880">Georgia (+7880)</option>\n      <option data-countryCode="DE" value="49">Germany (+49)</option>\n      <option data-countryCode="GH" value="233">Ghana (+233)</option>\n      <option data-countryCode="GI" value="350">Gibraltar (+350)</option>\n      <option data-countryCode="GR" value="30">Greece (+30)</option>\n      <option data-countryCode="GL" value="299">Greenland (+299)</option>\n      <option data-countryCode="GD" value="1473">Grenada (+1473)</option>\n      <option data-countryCode="GP" value="590">Guadeloupe (+590)</option>\n      <option data-countryCode="GU" value="671">Guam (+671)</option>\n      <option data-countryCode="GT" value="502">Guatemala (+502)</option>\n      <option data-countryCode="GN" value="224">Guinea (+224)</option>\n      <option data-countryCode="GW" value="245">Guinea - Bissau (+245)</option>\n      <option data-countryCode="GY" value="592">Guyana (+592)</option>\n      <option data-countryCode="HT" value="509">Haiti (+509)</option>\n      <option data-countryCode="HN" value="504">Honduras (+504)</option>\n      <option data-countryCode="HK" value="852">Hong Kong (+852)</option>\n      <option data-countryCode="HU" value="36">Hungary (+36)</option>\n      <option data-countryCode="IS" value="354">Iceland (+354)</option>\n      <option data-countryCode="IN" value="91">India (+91)</option>\n      <option data-countryCode="ID" value="62">Indonesia</option>\n      <option data-countryCode="IR" value="98">Iran</option>\n      <option data-countryCode="IQ" value="964">Iraq</option>\n      <option data-countryCode="IE" value="353">Ireland</option>\n      <option data-countryCode="IT" value="39">Italy</option>\n      <option data-countryCode="JM" value="1876">Jamaica</option>\n      <option data-countryCode="JP" value="81">Japan</option>\n      <option data-countryCode="JO" value="962">Jordan</option>\n      <option data-countryCode="KZ" value="7">Kazakhstan</option>\n      <option data-countryCode="KE" value="254">Kenya</option>\n      <option data-countryCode="KI" value="686">Kiribati</option>\n      <option data-countryCode="KP" value="850">Korea North</option>\n      <option data-countryCode="KR" value="82">Korea South</option>\n      <option data-countryCode="KW" value="965">Kuwait</option>\n      <option data-countryCode="KG" value="996">Kyrgyzstan</option>\n      <option data-countryCode="LA" value="856">Laos</option>\n      <option data-countryCode="LV" value="371">Latvia</option>\n      <option data-countryCode="LB" value="961">Lebanon</option>\n      <option data-countryCode="LS" value="266">Lesotho (+266)</option>\n      <option data-countryCode="LR" value="231">Liberia</option>\n      <option data-countryCode="LY" value="218">Libya</option>\n      <option data-countryCode="LI" value="417">Liechtenstein</option>\n      <option data-countryCode="LT" value="370">Lithuania</option>\n      <option data-countryCode="LU" value="352">Luxembourg</option>\n      <option data-countryCode="MO" value="853">Macao</option>\n      <option data-countryCode="MK" value="389">Macedonia</option>\n      <option data-countryCode="MG" value="261">Madagascar</option>\n      <option data-countryCode="MW" value="265">Malawi</option>\n      <option data-countryCode="MY" value="60">Malaysia</option>\n      <option data-countryCode="MV" value="960">Maldives</option>\n      <option data-countryCode="ML" value="223">Mali</option>\n      <option data-countryCode="MT" value="356">Malta</option>\n      <option data-countryCode="MH" value="692">Marshall Islands</option>\n      <option data-countryCode="MQ" value="596">Martinique</option>\n      <option data-countryCode="MR" value="222">Mauritania</option>\n      <option data-countryCode="YT" value="269">Mayotte</option>\n      <option data-countryCode="MX" value="52">Mexico</option>\n      <option data-countryCode="FM" value="691">Micronesia</option>\n      <option data-countryCode="MD" value="373">Moldova</option>\n      <option data-countryCode="MC" value="377">Monaco</option>\n      <option data-countryCode="MN" value="976">Mongoli</option>\n      <option data-countryCode="MS" value="1664">Montserrat</option>\n      <option data-countryCode="MA" value="212">Morocco</option>\n      <option data-countryCode="MZ" value="258">Mozambique</option>\n      <option data-countryCode="MN" value="95">Myanmar</option>\n      <option data-countryCode="NA" value="264">Namibia</option>\n      <option data-countryCode="NR" value="674">Nauru</option>\n      <option data-countryCode="NP" value="977">Nepal</option>\n      <option data-countryCode="NL" value="31">Netherlands</option>\n      <option data-countryCode="NC" value="687">New Caledonia</option>\n      <option data-countryCode="NZ" value="64">New Zealand</option>\n      <option data-countryCode="NI" value="505">Nicaragua</option>\n      <option data-countryCode="NE" value="227">Niger</option>\n      <option data-countryCode="NG" value="234">Nigeria</option>\n      <option data-countryCode="NU" value="683">Niue</option>\n      <option data-countryCode="NF" value="672">Norfolk Islands</option>\n      <option data-countryCode="NP" value="670">Northern Marianas</option>\n      <option data-countryCode="NO" value="47">Norway</option>\n      <option data-countryCode="OM" value="968">Oman</option>\n      <option data-countryCode="PW" value="680">Palau</option>\n      <option data-countryCode="PS" value="970">Palestine</option>\n      <option data-countryCode="PA" value="507">Panama</option>\n      <option data-countryCode="PG" value="675">Papua New Guinea</option>\n      <option data-countryCode="PY" value="595">Paraguay</option>\n      <option data-countryCode="PE" value="51">Peru</option>\n      <option data-countryCode="PH" value="63">Philippines</option>\n      <option data-countryCode="PL" value="48">Poland</option>\n      <option data-countryCode="PT" value="351">Portugal</option>\n      <option data-countryCode="PR" value="1787">Puerto Rico</option>\n      <option data-countryCode="QA" value="974">Qatar</option>\n      <option data-countryCode="RE" value="262">Reunion</option>\n      <option data-countryCode="RO" value="40">Romania</option>\n      <option data-countryCode="RU" value="7">Russia</option>\n      <option data-countryCode="RW" value="250">Rwanda</option>\n      <option data-countryCode="SM" value="378">San Marino</option>\n      <option data-countryCode="ST" value="239">Sao Tome &amp; Principe</option>\n      <option data-countryCode="SA" value="966">Saudi Arabia</option>\n      <option data-countryCode="SN" value="221">Senegal</option>\n      <option data-countryCode="CS" value="381">Serbia</option>\n      <option data-countryCode="SC" value="248">Seychelle</option>\n      <option data-countryCode="SL" value="232">Sierra Leone</option>\n      <option data-countryCode="SG" value="65">Singapore</option>\n      <option data-countryCode="SK" value="421">Slovak Republic</option>\n      <option data-countryCode="SI" value="386">Slovenia</option>\n      <option data-countryCode="SB" value="677">Solomon Islands</option>\n      <option data-countryCode="SO" value="252">Somalia</option>\n      <option data-countryCode="ZA" value="27">South Africa</option>\n      <option data-countryCode="ES" value="34">Spain</option>\n      <option data-countryCode="LK" value="94">Sri Lanka</option>\n      <option data-countryCode="SH" value="290">St. Helena</option>\n      <option data-countryCode="KN" value="1869">St. Kitts</option>\n      <option data-countryCode="SC" value="1758">St. Lucia</option>\n      <option data-countryCode="SD" value="249">Sudan</option>\n      <option data-countryCode="SR" value="597">Suriname</option>\n      <option data-countryCode="SZ" value="268">Swaziland</option>\n      <option data-countryCode="SE" value="46">Sweden</option>\n      <option data-countryCode="CH" value="41">Switzerland</option>\n      <option data-countryCode="SI" value="963">Syria</option>\n      <option data-countryCode="TW" value="886">Taiwan</option>\n      <option data-countryCode="TJ" value="7">Tajikstan</option>\n      <option data-countryCode="TH" value="66">Thailand</option>\n      <option data-countryCode="TG" value="228">Togo</option>\n      <option data-countryCode="TO" value="676">Tonga</option>\n      <option data-countryCode="TT" value="1868">Trinidad &amp; Tobago</option>\n      <option data-countryCode="TN" value="216">Tunisia</option>\n      <option data-countryCode="TR" value="90">Turkey</option>\n      <option data-countryCode="TM" value="7">Turkmenistan</option>\n      <option data-countryCode="TM" value="993">Turkmenistan</option>\n      <option data-countryCode="TC" value="1649">Turks &amp; Caicos Islands</option>\n      <option data-countryCode="TV" value="688">Tuvalu</option>\n      <option data-countryCode="UG" value="256">Uganda</option>\n      <!-- <option data-countryCode="GB" value="44">UK (+44)</option> -->\n      <option data-countryCode="UA" value="380">Ukraine</option>\n      <option data-countryCode="AE" value="971">United Arab Emirates</option>\n      <option data-countryCode="UY" value="598">Uruguay)</option>\n      <!-- <option data-countryCode="US" value="1">USA (+1)</option> -->\n      <option data-countryCode="UZ" value="7">Uzbekistan</option>\n      <option data-countryCode="VU" value="678">Vanuatu</option>\n      <option data-countryCode="VA" value="379">Vatican City</option>\n      <option data-countryCode="VE" value="58">Venezuela)</option>\n      <option data-countryCode="VN" value="84">Vietnam)</option>\n      <option data-countryCode="VG" value="84">Virgin Islands - British</option>\n      <option data-countryCode="VI" value="84">Virgin Islands - US </option>\n      <option data-countryCode="WF" value="681">Wallis &amp; Futuna</option>\n      <option data-countryCode="YE" value="969">Yemen (North)</option>\n      <option data-countryCode="YE" value="967">Yemen (South)</option>\n      <option data-countryCode="ZM" value="260">Zambia</option>\n      <option data-countryCode="ZW" value="263">Zimbabwe</option>\n    </select>\n  </form>\n  <script src="/public/js/dom.js"></script>\n  <script src="/public/js/fetch.js"></script>\n</body>\n\n</html>\n', 'should contain the index.html markup');
      t.end();
    });
});



