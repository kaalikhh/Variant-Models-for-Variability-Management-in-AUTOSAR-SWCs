function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/In1 */
	this.urlHashMap["VariantSubsystemModel2:36"] = "VariantSubsystemModel2.c:33,41&VariantSubsystemModel2.h:32";
	/* <Root>/In2 */
	this.urlHashMap["VariantSubsystemModel2:37"] = "msg=rtwMsg_reducedBlock&block=VariantSubsystemModel2:37";
	/* <Root>/Scope */
	this.urlHashMap["VariantSubsystemModel2:39"] = "msg=rtwMsg_reducedBlock&block=VariantSubsystemModel2:39";
	/* <Root>/Out1 */
	this.urlHashMap["VariantSubsystemModel2:38"] = "VariantSubsystemModel2.c:28";
	/* <S2>/Discrete-Time
Integrator */
	this.urlHashMap["VariantSubsystemModel2:48"] = "VariantSubsystemModel2.c:29,43&VariantSubsystemModel2.h:30";
	/* <S2>/Discrete-Time
Integrator1 */
	this.urlHashMap["VariantSubsystemModel2:49"] = "VariantSubsystemModel2.c:44,48&VariantSubsystemModel2.h:31";
	/* <S2>/Gain */
	this.urlHashMap["VariantSubsystemModel2:30"] = "VariantSubsystemModel2.c:49";
	/* <S3>/Constant */
	this.urlHashMap["VariantSubsystemModel2:35"] = "msg=rtwMsg_notTraceable&block=VariantSubsystemModel2:35";
	/* <S3>/Relay */
	this.urlHashMap["VariantSubsystemModel2:12"] = "msg=rtwMsg_notTraceable&block=VariantSubsystemModel2:12";
	/* <S3>/Sum */
	this.urlHashMap["VariantSubsystemModel2:13"] = "msg=rtwMsg_notTraceable&block=VariantSubsystemModel2:13";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "VariantSubsystemModel2"};
	this.sidHashMap["VariantSubsystemModel2"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "VariantSubsystemModel2:1"};
	this.sidHashMap["VariantSubsystemModel2:1"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<S2>"] = {sid: "VariantSubsystemModel2:19"};
	this.sidHashMap["VariantSubsystemModel2:19"] = {rtwname: "<S2>"};
	this.rtwnameHashMap["<S3>"] = {sid: "VariantSubsystemModel2:9"};
	this.sidHashMap["VariantSubsystemModel2:9"] = {rtwname: "<S3>"};
	this.rtwnameHashMap["<Root>/In1"] = {sid: "VariantSubsystemModel2:36"};
	this.sidHashMap["VariantSubsystemModel2:36"] = {rtwname: "<Root>/In1"};
	this.rtwnameHashMap["<Root>/In2"] = {sid: "VariantSubsystemModel2:37"};
	this.sidHashMap["VariantSubsystemModel2:37"] = {rtwname: "<Root>/In2"};
	this.rtwnameHashMap["<Root>/Scope"] = {sid: "VariantSubsystemModel2:39"};
	this.sidHashMap["VariantSubsystemModel2:39"] = {rtwname: "<Root>/Scope"};
	this.rtwnameHashMap["<Root>/Variant Subsystem"] = {sid: "VariantSubsystemModel2:1"};
	this.sidHashMap["VariantSubsystemModel2:1"] = {rtwname: "<Root>/Variant Subsystem"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "VariantSubsystemModel2:38"};
	this.sidHashMap["VariantSubsystemModel2:38"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<S1>/In1"] = {sid: "VariantSubsystemModel2:2"};
	this.sidHashMap["VariantSubsystemModel2:2"] = {rtwname: "<S1>/In1"};
	this.rtwnameHashMap["<S1>/In2"] = {sid: "VariantSubsystemModel2:34"};
	this.sidHashMap["VariantSubsystemModel2:34"] = {rtwname: "<S1>/In2"};
	this.rtwnameHashMap["<S1>/Car"] = {sid: "VariantSubsystemModel2:19"};
	this.sidHashMap["VariantSubsystemModel2:19"] = {rtwname: "<S1>/Car"};
	this.rtwnameHashMap["<S1>/Thermostat"] = {sid: "VariantSubsystemModel2:9"};
	this.sidHashMap["VariantSubsystemModel2:9"] = {rtwname: "<S1>/Thermostat"};
	this.rtwnameHashMap["<S1>/Out1"] = {sid: "VariantSubsystemModel2:3"};
	this.sidHashMap["VariantSubsystemModel2:3"] = {rtwname: "<S1>/Out1"};
	this.rtwnameHashMap["<S2>/In1"] = {sid: "VariantSubsystemModel2:33"};
	this.sidHashMap["VariantSubsystemModel2:33"] = {rtwname: "<S2>/In1"};
	this.rtwnameHashMap["<S2>/Discrete-Time Integrator"] = {sid: "VariantSubsystemModel2:48"};
	this.sidHashMap["VariantSubsystemModel2:48"] = {rtwname: "<S2>/Discrete-Time Integrator"};
	this.rtwnameHashMap["<S2>/Discrete-Time Integrator1"] = {sid: "VariantSubsystemModel2:49"};
	this.sidHashMap["VariantSubsystemModel2:49"] = {rtwname: "<S2>/Discrete-Time Integrator1"};
	this.rtwnameHashMap["<S2>/Gain"] = {sid: "VariantSubsystemModel2:30"};
	this.sidHashMap["VariantSubsystemModel2:30"] = {rtwname: "<S2>/Gain"};
	this.rtwnameHashMap["<S2>/Out1"] = {sid: "VariantSubsystemModel2:32"};
	this.sidHashMap["VariantSubsystemModel2:32"] = {rtwname: "<S2>/Out1"};
	this.rtwnameHashMap["<S3>/In2"] = {sid: "VariantSubsystemModel2:11"};
	this.sidHashMap["VariantSubsystemModel2:11"] = {rtwname: "<S3>/In2"};
	this.rtwnameHashMap["<S3>/Constant"] = {sid: "VariantSubsystemModel2:35"};
	this.sidHashMap["VariantSubsystemModel2:35"] = {rtwname: "<S3>/Constant"};
	this.rtwnameHashMap["<S3>/Relay"] = {sid: "VariantSubsystemModel2:12"};
	this.sidHashMap["VariantSubsystemModel2:12"] = {rtwname: "<S3>/Relay"};
	this.rtwnameHashMap["<S3>/Sum"] = {sid: "VariantSubsystemModel2:13"};
	this.sidHashMap["VariantSubsystemModel2:13"] = {rtwname: "<S3>/Sum"};
	this.rtwnameHashMap["<S3>/Out1"] = {sid: "VariantSubsystemModel2:14"};
	this.sidHashMap["VariantSubsystemModel2:14"] = {rtwname: "<S3>/Out1"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
