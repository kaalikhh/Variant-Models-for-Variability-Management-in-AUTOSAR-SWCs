/* This file contains stub implementations of the AUTOSAR RTE functions.
   The stub implementations can be used for testing the generated code in
   Simulink, for example, in SIL/PIL simulations of the component under
   test. Note that this file should be replaced with an appropriate RTE
   file when deploying the generated code outside of Simulink.

   This file is generated for:
   Atomic software component:  "VariantSubsystemModel2"
   ARXML schema: "4.2"
   File generated on: "15-Jun-2018 16:26:34"  */

/* This header file specifies macros for the abstraction of compiler specific
   keywords used for addressing data and code within declarations and
   definitions.  This is used to overcome problems caused by the limited 16 bit
   addressing range.
   For SIL/PIL macros behave as identity operators. */
#ifndef Compiler_h
#define Compiler_h

/* Compiler abstraction macros */
#define FUNC(type, memclass)           type
#define P2VAR(ptrtype, memclass, ptrclass) ptrtype *
#define P2CONST(ptrtype, memclass, ptrclass) const ptrtype *
#define CONSTP2VAR(ptrtype, memclass, ptrclass) ptrtype * const
#define CONSTP2CONST(ptrtype, memclass, ptrclass) const ptrtype * const
#define CONST(consttype, memclass)     const consttype
#define VAR( type, memclass )          type
#endif
