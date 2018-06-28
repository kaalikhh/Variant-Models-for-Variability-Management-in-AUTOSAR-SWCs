/*
 * File: VariantSubsystemModel1.h
 *
 * Code generated for Simulink model 'VariantSubsystemModel1'.
 *
 * Model version                  : 1.54
 * Simulink Coder version         : 8.12 (R2017a) 16-Feb-2017
 * C/C++ source code generated on : Fri Jun 15 15:46:08 2018
 *
 * Target selection: autosar.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives:
 *    1. Execution efficiency
 *    2. RAM efficiency
 * Validation result: Not run
 */

#ifndef RTW_HEADER_VariantSubsystemModel1_h_
#define RTW_HEADER_VariantSubsystemModel1_h_
#ifndef VariantSubsystemModel1_COMMON_INCLUDES_
# define VariantSubsystemModel1_COMMON_INCLUDES_
#include "rtwtypes.h"
#include "Rte_variant_subsystems.h"
#endif                                 /* VariantSubsystemModel1_COMMON_INCLUDES_ */

/* Macros for accessing real-time model data structure */

/* Block signals and states (auto storage) for system '<Root>' */
typedef struct tag_DW {
  int32_T clockTickCounter;            /* '<Root>/Sensor2' */
} DW;

/* Block signals and states (auto storage) */
extern DW rtDW;

/*-
 * These blocks were eliminated from the model due to optimizations:
 *
 * Block '<Root>/Scope' : Unused code path elimination
 * Block '<Root>/Sensor1' : Unused code path elimination
 */

/*-
 * The generated code includes comments that allow you to trace directly
 * back to the appropriate location in the model.  The basic format
 * is <system>/block_name, where system is the system number (uniquely
 * assigned by Simulink) and block_name is the name of the block.
 *
 * Use the MATLAB hilite_system command to trace the generated code back
 * to the model.  For example,
 *
 * hilite_system('<S3>')    - opens system 3
 * hilite_system('<S3>/Kp') - opens and selects block Kp which resides in S3
 *
 * Here is the system hierarchy for this model
 *
 * '<Root>' : 'VariantSubsystemModel1'
 * '<S1>'   : 'VariantSubsystemModel1/Controller'
 * '<S2>'   : 'VariantSubsystemModel1/Controller/Heater'
 * '<S3>'   : 'VariantSubsystemModel1/Controller/Thermostat'
 */
#endif                                 /* RTW_HEADER_VariantSubsystemModel1_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
