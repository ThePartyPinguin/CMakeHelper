import { BaseFlowConfig } from "../../flow/base-flow-config";
import { RegexConstants } from "../../util/regex-constants";
import { RegexValidatedTextInputStep } from "../input/regex-validated-text-input-step";
import { TextInputStep, TextInputStepConfig } from "../input/text-input-step";
import { StepNames } from "../step-names";

export interface SourceDirConfig extends BaseFlowConfig
{
	srcDir: string;
}

export class InputSourceDirStep<TFlowConfig extends SourceDirConfig> extends RegexValidatedTextInputStep<TFlowConfig>
{
	constructor(_config: TFlowConfig)
	{
		super(_config, StepNames.inputSourceDir, {
			regexString: RegexConstants.relativeDirectoryRegex,
			regexFlags: 'gi',
			validationMessage: `Invalid input! Path should be conform regex: '${RegexConstants.relativeDirectoryRegex}'`,
			allowEmpty: true
		});
	}

	protected onInput(inputValue: string): void {

		if(!inputValue || inputValue == '')
		{
			this.config.srcDir = 'src';
			return;
		}

		this.config.srcDir = inputValue;
	}

	public getStepConfig(): TextInputStepConfig {
		return {
			stepTitle: 'Source dir',
			placeHolder: 'Enter directory',
			prompt: 'Set the directory of the project\'s source files. Keep empty to keep default directory (src)',
			ignoreFocusOut: true
		}
	}	
}