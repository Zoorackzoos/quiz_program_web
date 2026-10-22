function alphabeticallySortStrings(
    stringsList: string[],
    tabAmount: string = "\t"
): string
{
    console.log(tabAmount,"alphabeticallySortStrings");
    tabAmount += "\t";
    let returnStringList: string[] = [];

    for(let i = 0; i < stringsList.length; i++)
    {
        returnStringList.push(stringsList[i]);
    }
    returnStringList = returnStringList.sort();

    return returnStringList.join(", ");
}

function stageAlphabeticalSortStrings(
    tabAmount: string = "\t"
): string
{
    console.log(tabAmount,"alphabeticallySortStrings");
    tabAmount += "\t";
    let listOfStrings: string[] =
        [
            "(Security policies do not impact the usability of a software system.)",
            "(One method of determining the extent of the attack surface is by penetration testing.)",
            "(Access control mechanisms can be realized as software connectors.)",
            "(Threat models are inherently incomplete.)",
            "(Many security mechanisms pose an overhead on the system’s performance.)",
            "(In white box penetration testing, information about the system’s design and implementation are used in generation of tests.)",
            "(A system architecture provides stakeholders with a higher-level understanding of the overall system rather than focusing on details at the implementation level.)",
            "(A carefully constructed security architecture aims to minimize the attack surface.)",
            "(Approaches to software security can be applied on different software artifacts and at different stages of software development.)"
        ];
    return alphabeticallySortStrings(listOfStrings,tabAmount)
}

function main()
{
    console.log( stageAlphabeticalSortStrings() );
}

main();