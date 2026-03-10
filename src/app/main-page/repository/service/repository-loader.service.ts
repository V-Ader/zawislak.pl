import {RepositoryBuilder, RepositoryTags} from "../model/repository.model";

export class RepositoryLoaderService {
	constructor() {
	}

	static getRepositories() {
		return [
			new RepositoryBuilder()
				.setName('Loyalty System Go')
				.setDescription('Loyalty_GO is a RESTful API built with Go and the Gin framework.')
				.setUrl('https://github.com/V-Ader/LoyaltySystemGO')
				.setIcon('../../../../assets/repository/LoyaltySystemGO.png')
				.setTags([RepositoryTags.Go, RepositoryTags.RestAPI, RepositoryTags.PostrgeSQL, RepositoryTags.Docker, RepositoryTags.Microservices])
				.build(),
			new RepositoryBuilder()
				.setName('Notion Recipe AI Agent')
				.setDescription('An AI-powered agent that automatically extracts culinary recipes from provided sources and organizes them directly into a Notion meal planner database.')
				.setIcon('../../../../assets/repository/AgenticAI.png')
				.setTags([RepositoryTags.TypeScript, RepositoryTags.Notion, RepositoryTags.AI, RepositoryTags.N8N])
				.build(),
			new RepositoryBuilder()
				.setName('Household Budget Tracker')
				.setDescription('A web application deployed on a private server with secure access handled via Keycloak. It features an Angular frontend enabling bank statement imports, semi-automatic transaction categorization, expense analysis, and financial reporting.')
				.setIcon('../../../../assets/repository/FinanceManager.png')
				.setTags([RepositoryTags.Angular, RepositoryTags.MCP, RepositoryTags.TypeScript, RepositoryTags.MULTI_TENENT, RepositoryTags.Keycloak])
				.build(),
			new RepositoryBuilder()
				.setName('FilesOrganizer')
				.setDescription('Files Organizer is a Scala application designed to efficiently sort media files based on their Modification time')
				.setUrl('https://github.com/V-Ader/FilesOrganizer')
				.setIcon('../../../../assets/repository/FilesOrganizer.png')
				.setTags([RepositoryTags.Scala])
				.build(),
			new RepositoryBuilder()
				.setName('Locked Up')
				.setDescription('A social-deduction multiplayer game where players are trapped in a mansion and must work together to uncover the murderer among them')
				.setUrl('https://github.com/Seaftware/locked-up')
				.setIcon('../../../../assets/repository/LockedUpImg.png')
				.setTags([RepositoryTags.Cpp, RepositoryTags.ProtocolBuffers])
				.build(),
			new RepositoryBuilder()
				.setName('RockPaperScissors - Card Game')
				.setDescription('This game follows a rock-paper-scissors style, where players use cards with specific symbols to counter each other\'s moves in strategic battles. The logic is managed by a server written in Go.')
				.setUrl('https://github.com/V-Ader/RockPaperScissors_CardGame')
				.setIcon('../../../../assets/repository/RockPaperScissors.png')
				.setTags([RepositoryTags.Go, RepositoryTags.JavaScript, RepositoryTags.WebSocket])
				.build(),
			new RepositoryBuilder()
				.setName('Loyalty cards - Cassandra')
				.setDescription('This project is a loyalty card system built on Apache Cassandra, allowing customers to use cards issued by different providers while tracking their balances.')
				.setUrl('https://github.com/V-Ader/Cassandra_loyality_cards')
				.setIcon('../../../../assets/repository/Cassandra.png')
				.setTags([RepositoryTags.Java, RepositoryTags.Cassandra, RepositoryTags.Docker])
				.build(),
			new RepositoryBuilder()
				.setName('zawiślak.pl')
				.setDescription('Source code of that website')
				.setUrl('https://github.com/V-Ader/zawislak.pl')
				.setIcon('../../../../assets/repository/zawislak-pl.png')
				.setTags([RepositoryTags.Angular, RepositoryTags.TypeScript])
				.build(),
			new RepositoryBuilder()
				.setName('Elementals')
				.setDescription('Elementals is a card game based on elemental duels, where players compete by playing cards representing different elements and abilities. The goal of the game is to strategically defeat the opponent through the proper use of cards and risk mechanics.')
				.setUrl('https://github.com/V-Ader/Elementals')
				.setIcon('../../../../assets/repository/Elementals.png')
				.setTags([RepositoryTags.TypeScript, RepositoryTags.WebSocket])
				.build(),
		];
	}
}