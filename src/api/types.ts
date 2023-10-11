export type ElideVariables<TVariables> = {} extends TVariables
	? void
	: TVariables
