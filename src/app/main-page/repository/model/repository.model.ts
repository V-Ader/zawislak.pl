export class RepositoryModel {
    name: string;
    description: string;
    url: string;
    icon: string;
    tags: RepositoryTags[] = [];
    constructor(name: string, description: string, url: string, icon: string, tags: RepositoryTags[] = []) {
        this.icon = icon;
        this.name = name;
        this.description = description;
        this.url = url;
        this.tags = tags;
    }
}

export enum RepositoryTags {
    Go = 'Go',
    Python = 'Python',   
    JavaScript = 'JavaScript',
    Java = 'Java',
    TypeScript = 'TypeScript',
    Cpp = 'C++',
    Scala = 'Scala',
    Docker = 'Docker',
    K8s = 'K8s',
    RestAPI = 'RestAPI',
    Microservices = 'Microservices',
    Grpc = 'Grpc',
    ProtocolBuffers = 'Protocol Buffers',
    WebSocket = 'WebSocket',
    PostrgeSQL = 'PostgreSQL',
    Cassandra = 'Cassandra',
    Angular = 'Angular',
}

export class RepositoryBuilder {
    private name: string = '';
    private description: string = '';
    private url: string = '';
    private icon: string = '';
    private tags: RepositoryTags[] = [];

    setName(name: string): RepositoryBuilder {
        this.name = name;
        return this;
    }

    setDescription(description: string): RepositoryBuilder {
        this.description = description;
        return this;
    }

    setUrl(url: string): RepositoryBuilder {
        this.url = url;
        return this;
    }

    setIcon(icon: string): RepositoryBuilder {
        this.icon = icon;
        return this;
    }

    setTags(tags: RepositoryTags[]): RepositoryBuilder {
        this.tags = tags;
        return this;
    }

    build(): RepositoryModel {
        return new RepositoryModel(this.name, this.description, this.url, this.icon, this.tags);
    }
}
