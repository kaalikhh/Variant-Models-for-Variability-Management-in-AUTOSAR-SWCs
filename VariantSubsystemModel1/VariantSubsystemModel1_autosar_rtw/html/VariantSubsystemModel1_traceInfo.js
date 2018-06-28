function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/Scope */
	this.urlHashMap["VariantSubsystemModel1:2"] = "msg=rtwMsg_reducedBlock&block=VariantSubsystemModel1:2";
	/* <Root>/Sensor1 */
	this.urlHashMap["VariantSubsystemModel1:94"] = "msg=rtwMsg_reducedBlock&block=VariantSubsystemModel1:94";
	/* <Root>/Sensor2 */
	this.urlHashMap["VariantSubsystemModel1:95"] = "VariantSubsystemModel1.c:28,36&VariantSubsystemModel1.h:30";
	/* <Root>/Out1 */
	this.urlHashMap["VariantSubsystemModel1:36"] = "VariantSubsystemModel1.c:38";
	/* <S2>/Constant */
	this.urlHashMap["VariantSubsystemModel1:74"] = "msg=rtwMsg_CodeGenerationReducedBlock&block=VariantSubsystemModel1:74";
	/* <S2>/Heat Gain//Degree */
	this.urlHashMap["VariantSubsystemModel1:69"] = "msg=rtwMsg_CodeGenerationReducedBlock&block=VariantSubsystemModel1:69";
	/* <S2>/Heater Switch */
	this.urlHashMap["VariantSubsystemModel1:70"] = "VariantSubsystemModel1.c:39";
	/* <S2>/Heater Temperature */
	this.urlHashMap["VariantSubsystemModel1:71"] = "msg=rtwMsg_CodeGenerationReducedBlock&block=VariantSubsystemModel1:71";
	/* <S2>/Sum */
	this.urlHashMap["VariantSubsystemModel1:72"] = "msg=rtwMsg_CodeGenerationReducedBlock&block=VariantSubsystemModel1:72";
	/* <S3>/Constant */
	this.urlHashMap["VariantSubsystemModel1:92"] = "msg=rtwMsg_notTraceable&block=VariantSubsystemModel1:92";
	/* <S3>/Relay */
	this.urlHashMap["VariantSubsystemModel1:88"] = "msg=rtwMsg_notTraceable&block=VariantSubsystemModel1:88";
	/* <S3>/Sum */
	this.urlHashMap["VariantSubsystemModel1:89"] = "msg=rtwMsg_notTraceable&block=VariantSubsystemModel1:89";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "VariantSubsystemModel1"};
	this.sidHashMap["VariantSubsystemModel1"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "VariantSubsystemModel1:7"};
	this.sidHashMap["VariantSubsystemModel1:7"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<S2>"] = {sid: "VariantSubsystemModel1:66"};
	this.sidHashMap["VariantSubsystemModel1:66"] = {rtwname: "<S2>"};
	this.rtwnameHashMap["<S3>"] = {sid: "VariantSubsystemModel1:85"};
	this.sidHashMap["VariantSubsystemModel1:85"] = {rtwname: "<S3>"};
	this.rtwnameHashMap["<Root>/Controller"] = {sid: "VariantSubsystemModel1:7"};
	this.sidHashMap["VariantSubsystemModel1:7"] = {rtwname: "<Root>/Controller"};
	this.rtwnameHashMap["<Root>/Scope"] = {sid: "VariantSubsystemModel1:2"};
	this.sidHashMap["VariantSubsystemModel1:2"] = {rtwname: "<Root>/Scope"};
	this.rtwnameHashMap["<Root>/Sensor1"] = {sid: "VariantSubsystemModel1:94"};
	this.sidHashMap["VariantSubsystemModel1:94"] = {rtwname: "<Root>/Sensor1"};
	this.rtwnameHashMap["<Root>/Sensor2"] = {sid: "VariantSubsystemModel1:95"};
	this.sidHashMap["VariantSubsystemModel1:95"] = {rtwname: "<Root>/Sensor2"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "VariantSubsystemModel1:36"};
	this.sidHashMap["VariantSubsystemModel1:36"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<S1>/Sensor1"] = {sid: "VariantSubsystemModel1:8"};
	this.sidHashMap["VariantSubsystemModel1:8"] = {rtwname: "<S1>/Sensor1"};
	this.rtwnameHashMap["<S1>/Sensor2"] = {sid: "VariantSubsystemModel1:34"};
	this.sidHashMap["VariantSubsystemModel1:34"] = {rtwname: "<S1>/Sensor2"};
	this.rtwnameHashMap["<S1>/Heater"] = {sid: "VariantSubsystemModel1:66"};
	this.sidHashMap["VariantSubsystemModel1:66"] = {rtwname: "<S1>/Heater"};
	this.rtwnameHashMap["<S1>/Thermostat"] = {sid: "VariantSubsystemModel1:85"};
	this.sidHashMap["VariantSubsystemModel1:85"] = {rtwname: "<S1>/Thermostat"};
	this.rtwnameHashMap["<S1>/Out1"] = {sid: "VariantSubsystemModel1:9"};
	this.sidHashMap["VariantSubsystemModel1:9"] = {rtwname: "<S1>/Out1"};
	this.rtwnameHashMap["<S2>/Sensor2"] = {sid: "VariantSubsystemModel1:67"};
	this.sidHashMap["VariantSubsystemModel1:67"] = {rtwname: "<S2>/Sensor2"};
	this.rtwnameHashMap["<S2>/Constant"] = {sid: "VariantSubsystemModel1:74"};
	this.sidHashMap["VariantSubsystemModel1:74"] = {rtwname: "<S2>/Constant"};
	this.rtwnameHashMap["<S2>/Heat Gain//Degree"] = {sid: "VariantSubsystemModel1:69"};
	this.sidHashMap["VariantSubsystemModel1:69"] = {rtwname: "<S2>/Heat Gain//Degree"};
	this.rtwnameHashMap["<S2>/Heater Switch"] = {sid: "VariantSubsystemModel1:70"};
	this.sidHashMap["VariantSubsystemModel1:70"] = {rtwname: "<S2>/Heater Switch"};
	this.rtwnameHashMap["<S2>/Heater Temperature"] = {sid: "VariantSubsystemModel1:71"};
	this.sidHashMap["VariantSubsystemModel1:71"] = {rtwname: "<S2>/Heater Temperature"};
	this.rtwnameHashMap["<S2>/Sum"] = {sid: "VariantSubsystemModel1:72"};
	this.sidHashMap["VariantSubsystemModel1:72"] = {rtwname: "<S2>/Sum"};
	this.rtwnameHashMap["<S2>/Out1"] = {sid: "VariantSubsystemModel1:73"};
	this.sidHashMap["VariantSubsystemModel1:73"] = {rtwname: "<S2>/Out1"};
	this.rtwnameHashMap["<S3>/Sensor1 "] = {sid: "VariantSubsystemModel1:87"};
	this.sidHashMap["VariantSubsystemModel1:87"] = {rtwname: "<S3>/Sensor1 "};
	this.rtwnameHashMap["<S3>/Constant"] = {sid: "VariantSubsystemModel1:92"};
	this.sidHashMap["VariantSubsystemModel1:92"] = {rtwname: "<S3>/Constant"};
	this.rtwnameHashMap["<S3>/Relay"] = {sid: "VariantSubsystemModel1:88"};
	this.sidHashMap["VariantSubsystemModel1:88"] = {rtwname: "<S3>/Relay"};
	this.rtwnameHashMap["<S3>/Sum"] = {sid: "VariantSubsystemModel1:89"};
	this.sidHashMap["VariantSubsystemModel1:89"] = {rtwname: "<S3>/Sum"};
	this.rtwnameHashMap["<S3>/Out1 "] = {sid: "VariantSubsystemModel1:90"};
	this.sidHashMap["VariantSubsystemModel1:90"] = {rtwname: "<S3>/Out1 "};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
