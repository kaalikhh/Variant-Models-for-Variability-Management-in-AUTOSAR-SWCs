function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/In */
	this.urlHashMap["VariantSubsystemModel3:41"] = "VariantSubsystemModel3.c:33,41&VariantSubsystemModel3.h:32";
	/* <Root>/Scope */
	this.urlHashMap["VariantSubsystemModel3:39"] = "msg=rtwMsg_SimulationReducedBlock&block=VariantSubsystemModel3:39";
	/* <Root>/Out1 */
	this.urlHashMap["VariantSubsystemModel3:38"] = "VariantSubsystemModel3.c:28";
	/* <S2>/Discrete-Time
Integrator */
	this.urlHashMap["VariantSubsystemModel3:45"] = "VariantSubsystemModel3.c:29,43&VariantSubsystemModel3.h:30";
	/* <S2>/Discrete-Time
Integrator1 */
	this.urlHashMap["VariantSubsystemModel3:55"] = "VariantSubsystemModel3.c:44,48&VariantSubsystemModel3.h:31";
	/* <S2>/Gain */
	this.urlHashMap["VariantSubsystemModel3:47"] = "VariantSubsystemModel3.c:49";
	/* <S3>/Add */
	this.urlHashMap["VariantSubsystemModel3:28"] = "msg=rtwMsg_notTraceable&block=VariantSubsystemModel3:28";
	/* <S3>/Constant */
	this.urlHashMap["VariantSubsystemModel3:30"] = "msg=rtwMsg_notTraceable&block=VariantSubsystemModel3:30";
	/* <S3>/Discrete-Time
Integrator */
	this.urlHashMap["VariantSubsystemModel3:51"] = "msg=rtwMsg_notTraceable&block=VariantSubsystemModel3:51";
	/* <S3>/Discrete-Time
Integrator1 */
	this.urlHashMap["VariantSubsystemModel3:52"] = "msg=rtwMsg_notTraceable&block=VariantSubsystemModel3:52";
	/* <S3>/Gain1 */
	this.urlHashMap["VariantSubsystemModel3:53"] = "msg=rtwMsg_notTraceable&block=VariantSubsystemModel3:53";
	/* <S3>/Subtract */
	this.urlHashMap["VariantSubsystemModel3:34"] = "msg=rtwMsg_notTraceable&block=VariantSubsystemModel3:34";
	/* <S3>/Zero-Order
Hold */
	this.urlHashMap["VariantSubsystemModel3:35"] = "msg=rtwMsg_notTraceable&block=VariantSubsystemModel3:35";
	/* <S4>/Output */
	this.urlHashMap["VariantSubsystemModel3:29:1"] = "msg=rtwMsg_notTraceable&block=VariantSubsystemModel3:29:1";
	/* <S4>/White Noise */
	this.urlHashMap["VariantSubsystemModel3:29:2"] = "msg=rtwMsg_notTraceable&block=VariantSubsystemModel3:29:2";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "VariantSubsystemModel3"};
	this.sidHashMap["VariantSubsystemModel3"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "VariantSubsystemModel3:1"};
	this.sidHashMap["VariantSubsystemModel3:1"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<S2>"] = {sid: "VariantSubsystemModel3:43"};
	this.sidHashMap["VariantSubsystemModel3:43"] = {rtwname: "<S2>"};
	this.rtwnameHashMap["<S3>"] = {sid: "VariantSubsystemModel3:26"};
	this.sidHashMap["VariantSubsystemModel3:26"] = {rtwname: "<S3>"};
	this.rtwnameHashMap["<S4>"] = {sid: "VariantSubsystemModel3:29"};
	this.sidHashMap["VariantSubsystemModel3:29"] = {rtwname: "<S4>"};
	this.rtwnameHashMap["<Root>/In"] = {sid: "VariantSubsystemModel3:41"};
	this.sidHashMap["VariantSubsystemModel3:41"] = {rtwname: "<Root>/In"};
	this.rtwnameHashMap["<Root>/Scope"] = {sid: "VariantSubsystemModel3:39"};
	this.sidHashMap["VariantSubsystemModel3:39"] = {rtwname: "<Root>/Scope"};
	this.rtwnameHashMap["<Root>/Variant Subsystem"] = {sid: "VariantSubsystemModel3:1"};
	this.sidHashMap["VariantSubsystemModel3:1"] = {rtwname: "<Root>/Variant Subsystem"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "VariantSubsystemModel3:38"};
	this.sidHashMap["VariantSubsystemModel3:38"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<S1>/In1"] = {sid: "VariantSubsystemModel3:2"};
	this.sidHashMap["VariantSubsystemModel3:2"] = {rtwname: "<S1>/In1"};
	this.rtwnameHashMap["<S1>/Car"] = {sid: "VariantSubsystemModel3:43"};
	this.sidHashMap["VariantSubsystemModel3:43"] = {rtwname: "<S1>/Car"};
	this.rtwnameHashMap["<S1>/CarRefined"] = {sid: "VariantSubsystemModel3:26"};
	this.sidHashMap["VariantSubsystemModel3:26"] = {rtwname: "<S1>/CarRefined"};
	this.rtwnameHashMap["<S1>/Out1"] = {sid: "VariantSubsystemModel3:3"};
	this.sidHashMap["VariantSubsystemModel3:3"] = {rtwname: "<S1>/Out1"};
	this.rtwnameHashMap["<S2>/In1"] = {sid: "VariantSubsystemModel3:44"};
	this.sidHashMap["VariantSubsystemModel3:44"] = {rtwname: "<S2>/In1"};
	this.rtwnameHashMap["<S2>/Discrete-Time Integrator"] = {sid: "VariantSubsystemModel3:45"};
	this.sidHashMap["VariantSubsystemModel3:45"] = {rtwname: "<S2>/Discrete-Time Integrator"};
	this.rtwnameHashMap["<S2>/Discrete-Time Integrator1"] = {sid: "VariantSubsystemModel3:55"};
	this.sidHashMap["VariantSubsystemModel3:55"] = {rtwname: "<S2>/Discrete-Time Integrator1"};
	this.rtwnameHashMap["<S2>/Gain"] = {sid: "VariantSubsystemModel3:47"};
	this.sidHashMap["VariantSubsystemModel3:47"] = {rtwname: "<S2>/Gain"};
	this.rtwnameHashMap["<S2>/Out1"] = {sid: "VariantSubsystemModel3:48"};
	this.sidHashMap["VariantSubsystemModel3:48"] = {rtwname: "<S2>/Out1"};
	this.rtwnameHashMap["<S3>/In1"] = {sid: "VariantSubsystemModel3:27"};
	this.sidHashMap["VariantSubsystemModel3:27"] = {rtwname: "<S3>/In1"};
	this.rtwnameHashMap["<S3>/Add"] = {sid: "VariantSubsystemModel3:28"};
	this.sidHashMap["VariantSubsystemModel3:28"] = {rtwname: "<S3>/Add"};
	this.rtwnameHashMap["<S3>/Band-Limited White Noise"] = {sid: "VariantSubsystemModel3:29"};
	this.sidHashMap["VariantSubsystemModel3:29"] = {rtwname: "<S3>/Band-Limited White Noise"};
	this.rtwnameHashMap["<S3>/Constant"] = {sid: "VariantSubsystemModel3:30"};
	this.sidHashMap["VariantSubsystemModel3:30"] = {rtwname: "<S3>/Constant"};
	this.rtwnameHashMap["<S3>/Discrete-Time Integrator"] = {sid: "VariantSubsystemModel3:51"};
	this.sidHashMap["VariantSubsystemModel3:51"] = {rtwname: "<S3>/Discrete-Time Integrator"};
	this.rtwnameHashMap["<S3>/Discrete-Time Integrator1"] = {sid: "VariantSubsystemModel3:52"};
	this.sidHashMap["VariantSubsystemModel3:52"] = {rtwname: "<S3>/Discrete-Time Integrator1"};
	this.rtwnameHashMap["<S3>/Gain1"] = {sid: "VariantSubsystemModel3:53"};
	this.sidHashMap["VariantSubsystemModel3:53"] = {rtwname: "<S3>/Gain1"};
	this.rtwnameHashMap["<S3>/Subtract"] = {sid: "VariantSubsystemModel3:34"};
	this.sidHashMap["VariantSubsystemModel3:34"] = {rtwname: "<S3>/Subtract"};
	this.rtwnameHashMap["<S3>/Zero-Order Hold"] = {sid: "VariantSubsystemModel3:35"};
	this.sidHashMap["VariantSubsystemModel3:35"] = {rtwname: "<S3>/Zero-Order Hold"};
	this.rtwnameHashMap["<S3>/Out1"] = {sid: "VariantSubsystemModel3:36"};
	this.sidHashMap["VariantSubsystemModel3:36"] = {rtwname: "<S3>/Out1"};
	this.rtwnameHashMap["<S4>/Output"] = {sid: "VariantSubsystemModel3:29:1"};
	this.sidHashMap["VariantSubsystemModel3:29:1"] = {rtwname: "<S4>/Output"};
	this.rtwnameHashMap["<S4>/White Noise"] = {sid: "VariantSubsystemModel3:29:2"};
	this.sidHashMap["VariantSubsystemModel3:29:2"] = {rtwname: "<S4>/White Noise"};
	this.rtwnameHashMap["<S4>/y"] = {sid: "VariantSubsystemModel3:29:3"};
	this.sidHashMap["VariantSubsystemModel3:29:3"] = {rtwname: "<S4>/y"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
