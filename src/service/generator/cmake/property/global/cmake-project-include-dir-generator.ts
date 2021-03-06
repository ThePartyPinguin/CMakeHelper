import { Project } from "../../../../../model/project/project";
import { RegexConstants } from "../../../../../util/regex-constants";
import { PropertyGenerator } from "../../../property/property-generator";
import { CMakeGeneratorHelper } from "../../cmake-generator-helper";
import { CMakeVariable } from "../../cmake-variable";

export class CMakeProjectIncludeDirGenerator extends PropertyGenerator<Project>
{
	generate(_project: Project, _fileContent: string[]): void {

		if(!_project.includeDirectories || _project.includeDirectories.length == 0)
		{
			return;
		}

		_fileContent.push('# Global include directories')

		const directoryListVarName = CMakeGeneratorHelper.formatVarString(_project.name, CMakeVariable.INCLUDE_DIR_LIST);

		const relativeDirectoryRegex = new RegExp(RegexConstants.relativeDirectoryRegex);

		for (const directory of _project.includeDirectories) 
		{
			let finalDirectory = directory;
			if(relativeDirectoryRegex.test(directory))
			{
				finalDirectory = `\${PROJECT_SOURCE_DIR}/${directory}`;
			}
			_fileContent.push(`list(APPEND "${directoryListVarName}" "${finalDirectory}")`);
		}
	}
}