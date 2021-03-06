import { Project } from "../../../model/project/project";
import { PropertyGenerator } from "../property/property-generator";
import { CMakeFileGenerator } from './cmake-file-generator';
import { CMakeFileHeaderGenerator } from "./property/global/cmake-file-header-generator";
import { CMakeGlobalChildProjectGenerator } from "./property/global/cmake-global-child-project-generator";
import { CMakeGlobalCompileDefinitionGenerator } from "./property/global/cmake-global-compile-definition-generator";
import { CMakeGlobalLibraryGenerator } from './property/global/cmake-global-library-generator';
import { CMakeGlobalOuputDirGenerator } from "./property/global/cmake-global-output-directory";
import { CMakeGlobalPackageGenerator } from "./property/global/cmake-global-package-generator";
import { CMakeGlobalPreCompiledHeaderGenerator } from "./property/global/cmake-global-pre-compiled-header-generator";
import { CMakeGlobalProjectLinkGenerator } from "./property/global/cmake-global-project-link-generator";
import { CMakePlatformTargetGenerator } from "./property/global/cmake-platform-target-generator";
import { CMakeProjectDeclGenerator } from "./property/global/cmake-project-decl-generator";
import { CMakeProjectIncludeDirGenerator } from "./property/global/cmake-project-include-dir-generator";
import { CMakeProjectLanguageGenerator } from "./property/global/cmake-project-language-generator";
import { CMakeSourceFilesGenerator } from "./property/global/cmake-source-files-generator";
import { CMakeTargetIncludeDirGenerator } from "./property/global/cmake-target-include-dir-generator";
import { CMakePlatformGenerator } from "./property/platform/cmake-platform-generator";

export class ProjectCMakeFileGenerator extends CMakeFileGenerator<Project>
{
	private static propertyGenerators: (new(_varSafeFileName: string) => PropertyGenerator<Project>)[] = [
		CMakeFileHeaderGenerator,
		CMakeProjectDeclGenerator,
		CMakeProjectLanguageGenerator,
		CMakeGlobalOuputDirGenerator,
		CMakeSourceFilesGenerator,
		CMakePlatformTargetGenerator,
		CMakeGlobalPreCompiledHeaderGenerator,
		CMakeProjectIncludeDirGenerator,
		CMakeGlobalChildProjectGenerator,
		CMakeGlobalProjectLinkGenerator,
		CMakeGlobalPackageGenerator,
		CMakeGlobalLibraryGenerator,
		CMakePlatformGenerator,
		CMakeTargetIncludeDirGenerator,
		CMakeGlobalCompileDefinitionGenerator,
	]

	protected getGenerators(): (new (_varSafeUid: string) => PropertyGenerator<Project>)[] {
		return ProjectCMakeFileGenerator.propertyGenerators;
	}
}