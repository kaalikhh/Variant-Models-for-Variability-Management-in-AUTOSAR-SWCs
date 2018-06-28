/* This file contains stub implementations of the AUTOSAR RTE functions.
   The stub implementations can be used for testing the generated code in
   Simulink, for example, in SIL/PIL simulations of the component under
   test. Note that this file should be replaced with an appropriate RTE
   file when deploying the generated code outside of Simulink.

   This file is generated for:
   Atomic software component:  "VariantSubsystemModel3"
   ARXML schema: "4.2"
   File generated on: "15-Jun-2018 16:33:18"  */

#ifndef Rte_VariantSubsystemModel3_h
#define Rte_VariantSubsystemModel3_h
#include "Rte_Type.h"
#include "Compiler.h"

/* Data access functions */
#define Rte_IWrite_Runnable_Step_Out1_Out1 Rte_IWrite_VariantSubsystemModel3_Runnable_Step_Out1_Out1

void Rte_IWrite_Runnable_Step_Out1_Out1(Double u);

#define Rte_IWriteRef_Runnable_Step_Out1_Out1 Rte_IWriteRef_VariantSubsystemModel3_Runnable_Step_Out1_Out1

Double* Rte_IWriteRef_Runnable_Step_Out1_Out1(void);

/* Entry point functions */
extern FUNC(void, VARIANTSUBSYSTEMMODEL3_CODE) Runnable_Init(void);
extern FUNC(void, VARIANTSUBSYSTEMMODEL3_CODE) Runnable_Step(void);

#endif