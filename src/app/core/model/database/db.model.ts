type TUser = User;
type TBaseNode = BaseNode;
type TDocumentNode = DocumentNode;
type TDocumentNodeVersion = DocumentNodeVersion;
type TBookmark = Bookmark;
type TCategory = Category;
type TDepartment = Department;
type TDocumentNodeCategory = DocumentNodeCategory;
type TDocumentNodeNote = DocumentNodeNote;
type TFolderNode = FolderNode;
type TNodeKeyWord = NodeKeyWord;
type TPersonalNode = PersonalNode;
type TPersonalNodeShare = PersonalNodeShare;
type TRole = Role;
type TRolePermission = RolePermission;
type TUserDepart = UserDepart;
type TUserPermission = UserPermission;
type TUserRole = UserRole;
type TPartition = Partition;
import { JsonObject, JsonProperty, JsonConverter, JsonConvert, JsonCustomConvert } from 'json2typescript';

@JsonConverter
export class NumberConverter implements JsonCustomConvert<number> {
    serialize(data: any): number {
        if (Number.isNaN(data)) {
            return data;
        } else {
            return Number(data);
        }
    }
    deserialize(data: any): number {
        if (typeof data === 'undefined' || data === null) {
            return data;
        }
        if (Number.isNaN(data)) {
            return data;
        } else {
            return Number(data);
        }
    }
}
@JsonConverter
export class StringConverter implements JsonCustomConvert<string> {
    serialize(data: any): string {
        if (data) {
            return data.toString();
        } else {
            return data;
        }
    }
    deserialize(data: any): string {
        if (data) {
            return data.toString();
        } else {
            return data;
        }
    }
}
@JsonConverter
export class BooleanConverter implements JsonCustomConvert<boolean> {
    serialize(data: any): boolean {
        if (typeof (data) === 'boolean') {
            return data;
        } else {
            return data;
        }
    }
    deserialize(data: any): boolean {
        if (typeof (data) === 'boolean') {
            return data;
        } else {
            return data;
        }
    }
}
@JsonConverter
export class DateTimeConverter implements JsonCustomConvert<Date> {
    serialize(date: Date): any {
        function pad(number: any) {
            if (number < 10) {
                return '0' + number;
            }
            return number;
        }
        return date.getFullYear() +
            '-' + pad(date.getMonth() + 1) +
            '-' + pad(date.getDate()) +
            'T' + pad(date.getHours()) +
            ':' + pad(date.getMinutes()) +
            ':' + pad(date.getSeconds()) +
            '.' + (date.getMilliseconds() / 1000).toFixed(3).slice(2, 5) +
            'Z';
    }
    deserialize(date: any): Date {
        const dReturn = new Date(date);
        if (dReturn.getFullYear() === 1970
            && dReturn.getMonth() === 0
            && dReturn.getDate() === 1) {
            return null as any;
        } else {
            return dReturn;
        }
    }
}
@JsonConverter
export class BaseNodeArrayConverter implements JsonCustomConvert<BaseNode[]> {
    serialize(data: BaseNode[]): any {
        const jsonConvert = new JsonConvert();
        return jsonConvert.serializeArray(data);
    }
    deserialize(data: any): BaseNode[] {
        const jsonConvert = new JsonConvert();
        return jsonConvert.deserializeArray(data, BaseNode);
    }
}
@JsonConverter
export class BookmarkArrayConverter implements JsonCustomConvert<Bookmark[]> {
    serialize(data: Bookmark[]): any {
        const jsonConvert = new JsonConvert();
        return jsonConvert.serializeArray(data);
    }
    deserialize(data: any): Bookmark[] {
        const jsonConvert = new JsonConvert();
        return jsonConvert.deserializeArray(data, Bookmark);
    }
}
@JsonConverter
export class DocumentNodeVersionArrayConverter implements JsonCustomConvert<DocumentNodeVersion[]> {
    serialize(data: DocumentNodeVersion[]): any {
        const jsonConvert = new JsonConvert();
        return jsonConvert.serializeArray(data);
    }
    deserialize(data: any): DocumentNodeVersion[] {
        const jsonConvert = new JsonConvert();
        return jsonConvert.deserializeArray(data, DocumentNodeVersion);
    }
}
@JsonConverter
export class DocumentNodeArrayConverter implements JsonCustomConvert<DocumentNode[]> {
    serialize(data: DocumentNode[]): any {
        const jsonConvert = new JsonConvert();
        return jsonConvert.serializeArray(data);
    }
    deserialize(data: any): DocumentNode[] {
        const jsonConvert = new JsonConvert();
        return jsonConvert.deserializeArray(data, DocumentNode);
    }
}
@JsonConverter
export class PersonalNodeArrayConverter implements JsonCustomConvert<PersonalNode[]> {
    serialize(data: PersonalNode[]): any {
        const jsonConvert = new JsonConvert();
        return jsonConvert.serializeArray(data);
    }
    deserialize(data: any): PersonalNode[] {
        const jsonConvert = new JsonConvert();
        return jsonConvert.deserializeArray(data, PersonalNode);
    }
}
@JsonConverter
export class UserDepartArrayConverter implements JsonCustomConvert<UserDepart[]> {
    serialize(data: UserDepart[]): any {
        const jsonConvert = new JsonConvert();
        return jsonConvert.serializeArray(data);
    }
    deserialize(data: any): UserDepart[] {
        const jsonConvert = new JsonConvert();
        return jsonConvert.deserializeArray(data, UserDepart);
    }
}
@JsonConverter
export class UserPermissionArrayConverter implements JsonCustomConvert<UserPermission[]> {
    serialize(data: UserPermission[]): any {
        const jsonConvert = new JsonConvert();
        return jsonConvert.serializeArray(data);
    }
    deserialize(data: any): UserPermission[] {
        const jsonConvert = new JsonConvert();
        return jsonConvert.deserializeArray(data, UserPermission);
    }
}
@JsonConverter
export class UserRoleArrayConverter implements JsonCustomConvert<UserRole[]> {
    serialize(data: UserRole[]): any {
        const jsonConvert = new JsonConvert();
        return jsonConvert.serializeArray(data);
    }
    deserialize(data: any): UserRole[] {
        const jsonConvert = new JsonConvert();
        return jsonConvert.deserializeArray(data, UserRole);
    }
}
@JsonConverter
export class UserConverter implements JsonCustomConvert<User> {
    serialize(data: User): any {
        const jsonConvert = new JsonConvert();
        return jsonConvert.serialize(data);
    }
    deserialize(data: any): User {
        const jsonConvert = new JsonConvert();
        return jsonConvert.deserializeObject(data, User);
    }
}
@JsonConverter
export class BaseNodeConverter implements JsonCustomConvert<BaseNode> {
    serialize(data: BaseNode): any {
        const jsonConvert = new JsonConvert();
        return jsonConvert.serialize(data);
    }
    deserialize(data: any): BaseNode {
        const jsonConvert = new JsonConvert();
        return jsonConvert.deserializeObject(data, BaseNode);
    }
}
@JsonConverter
export class FolderNodeArrayConverter implements JsonCustomConvert<FolderNode[]> {
    serialize(data: FolderNode[]): any {
        const jsonConvert = new JsonConvert();
        return jsonConvert.serializeArray(data);
    }
    deserialize(data: any): FolderNode[] {
        const jsonConvert = new JsonConvert();
        return jsonConvert.deserializeArray(data, FolderNode);
    }
}
@JsonConverter
export class NodeKeyWordArrayConverter implements JsonCustomConvert<NodeKeyWord[]> {
    serialize(data: NodeKeyWord[]): any {
        const jsonConvert = new JsonConvert();
        return jsonConvert.serializeArray(data);
    }
    deserialize(data: any): NodeKeyWord[] {
        const jsonConvert = new JsonConvert();
        return jsonConvert.deserializeArray(data, NodeKeyWord);
    }
}
@JsonConverter
export class RolePermissionArrayConverter implements JsonCustomConvert<RolePermission[]> {
    serialize(data: RolePermission[]): any {
        const jsonConvert = new JsonConvert();
        return jsonConvert.serializeArray(data);
    }
    deserialize(data: any): RolePermission[] {
        const jsonConvert = new JsonConvert();
        return jsonConvert.deserializeArray(data, RolePermission);
    }
}
@JsonConverter
export class DocumentNodeCategoryArrayConverter implements JsonCustomConvert<DocumentNodeCategory[]> {
    serialize(data: DocumentNodeCategory[]): any {
        const jsonConvert = new JsonConvert();
        return jsonConvert.serializeArray(data);
    }
    deserialize(data: any): DocumentNodeCategory[] {
        const jsonConvert = new JsonConvert();
        return jsonConvert.deserializeArray(data, DocumentNodeCategory);
    }
}
@JsonConverter
export class DocumentNodeConverter implements JsonCustomConvert<DocumentNode> {
    serialize(data: DocumentNode): any {
        const jsonConvert = new JsonConvert();
        return jsonConvert.serialize(data);
    }
    deserialize(data: any): DocumentNode {
        const jsonConvert = new JsonConvert();
        return jsonConvert.deserializeObject(data, DocumentNode);
    }
}
@JsonConverter
export class CategoryConverter implements JsonCustomConvert<Category> {
    serialize(data: Category): any {
        const jsonConvert = new JsonConvert();
        return jsonConvert.serialize(data);
    }
    deserialize(data: any): Category {
        const jsonConvert = new JsonConvert();
        return jsonConvert.deserializeObject(data, Category);
    }
}
@JsonConverter
export class PartitionConverter implements JsonCustomConvert<Partition> {
    serialize(data: Partition): any {
        const jsonConvert = new JsonConvert();
        return jsonConvert.serialize(data);
    }
    deserialize(data: any): Partition {
        const jsonConvert = new JsonConvert();
        return jsonConvert.deserializeObject(data, Partition);
    }
}
@JsonConverter
export class PersonalNodeShareArrayConverter implements JsonCustomConvert<PersonalNodeShare[]> {
    serialize(data: PersonalNodeShare[]): any {
        const jsonConvert = new JsonConvert();
        return jsonConvert.serializeArray(data);
    }
    deserialize(data: any): PersonalNodeShare[] {
        const jsonConvert = new JsonConvert();
        return jsonConvert.deserializeArray(data, PersonalNodeShare);
    }
}
@JsonConverter
export class PersonalNodeConverter implements JsonCustomConvert<PersonalNode> {
    serialize(data: PersonalNode): any {
        const jsonConvert = new JsonConvert();
        return jsonConvert.serialize(data);
    }
    deserialize(data: any): PersonalNode {
        const jsonConvert = new JsonConvert();
        return jsonConvert.deserializeObject(data, PersonalNode);
    }
}
@JsonConverter
export class RoleConverter implements JsonCustomConvert<Role> {
    serialize(data: Role): any {
        const jsonConvert = new JsonConvert();
        return jsonConvert.serialize(data);
    }
    deserialize(data: any): Role {
        const jsonConvert = new JsonConvert();
        return jsonConvert.deserializeObject(data, Role);
    }
}
@JsonConverter
export class DepartmentConverter implements JsonCustomConvert<Department> {
    serialize(data: Department): any {
        const jsonConvert = new JsonConvert();
        return jsonConvert.serialize(data);
    }
    deserialize(data: any): Department {
        const jsonConvert = new JsonConvert();
        return jsonConvert.deserializeObject(data, Department);
    }
}

@JsonObject('User')
export class User {

    @JsonProperty('Id', StringConverter, true)
    Id: string = undefined as any;

    @JsonProperty('UserName', StringConverter, true)
    UserName: string = undefined as any;

    @JsonProperty('FirstName', StringConverter, true)
    FirstName: string = undefined as any;

    @JsonProperty('LastName', StringConverter, true)
    LastName: string = undefined as any;

    @JsonProperty('Email', StringConverter, true)
    Email: string = undefined as any;

    @JsonProperty('Tel', StringConverter, true)
    Tel: string = undefined as any;

    @JsonProperty('Password', StringConverter, true)
    Password: string = undefined as any;

    @JsonProperty('BaseNodes', BaseNodeArrayConverter, true)
    BaseNodes: BaseNode[] = [] as any;

    @JsonProperty('Bookmarks', BookmarkArrayConverter, true)
    Bookmarks: Bookmark[] = [] as any;

    @JsonProperty('DocumentNodeVersions', DocumentNodeVersionArrayConverter, true)
    DocumentNodeVersions: DocumentNodeVersion[] = [] as any;

    @JsonProperty('DocumentNodes', DocumentNodeArrayConverter, true)
    DocumentNodes: DocumentNode[] = [] as any;

    @JsonProperty('PersonalNodes', PersonalNodeArrayConverter, true)
    PersonalNodes: PersonalNode[] = [] as any;

    @JsonProperty('UserDeparts', UserDepartArrayConverter, true)
    UserDeparts: UserDepart[] = [] as any;

    @JsonProperty('UserPermissions', UserPermissionArrayConverter, true)
    UserPermissions: UserPermission[] = [] as any;

    @JsonProperty('UserRoles', UserRoleArrayConverter, true)
    UserRoles: UserRole[] = [] as any;

}

@JsonObject('BaseNode')
export class BaseNode {

    @JsonProperty('Id', StringConverter, true)
    Id: string = undefined as any;

    @JsonProperty('Name', StringConverter, true)
    Name: string = undefined as any;

    @JsonProperty('ParentId', StringConverter, true)
    ParentId: string = undefined as any;

    @JsonProperty('Path', StringConverter, true)
    Path: string = undefined as any;

    @JsonProperty('Type', NumberConverter, true)
    Type: number = undefined as any;

    @JsonProperty('Context', StringConverter, true)
    Context: string = undefined as any;

    @JsonProperty('CreatedById', StringConverter, true)
    CreatedById: string = undefined as any;

    @JsonProperty('CreatedAt', DateTimeConverter, true)
    CreatedAt: Date = undefined as any;

    @JsonProperty('Active', BooleanConverter, true)
    Active: boolean = undefined as any;

    @JsonProperty('CreatedBy', UserConverter, true)
    CreatedBy: User = undefined as any;

    @JsonProperty('Parent', BaseNodeConverter, true)
    Parent: BaseNode = undefined as any;

    @JsonProperty('DocumentNodes', DocumentNodeArrayConverter, true)
    DocumentNodes: DocumentNode[] = [] as any;

    @JsonProperty('FolderNodes', FolderNodeArrayConverter, true)
    FolderNodes: FolderNode[] = [] as any;

    @JsonProperty('InverseParent', BaseNodeArrayConverter, true)
    InverseParent: BaseNode[] = [] as any;

    @JsonProperty('NodeKeyWords', NodeKeyWordArrayConverter, true)
    NodeKeyWords: NodeKeyWord[] = [] as any;

    @JsonProperty('PersonalNodes', PersonalNodeArrayConverter, true)
    PersonalNodes: PersonalNode[] = [] as any;

    @JsonProperty('RolePermissions', RolePermissionArrayConverter, true)
    RolePermissions: RolePermission[] = [] as any;

    @JsonProperty('UserPermissions', UserPermissionArrayConverter, true)
    UserPermissions: UserPermission[] = [] as any;

}

@JsonObject('DocumentNode')
export class DocumentNode {

    @JsonProperty('Id', StringConverter, true)
    Id: string = undefined as any;

    @JsonProperty('BaseNodeId', StringConverter, true)
    BaseNodeId: string = undefined as any;

    @JsonProperty('MineType', StringConverter, true)
    MineType: string = undefined as any;

    @JsonProperty('Title', StringConverter, true)
    Title: string = undefined as any;

    @JsonProperty('Description', StringConverter, true)
    Description: string = undefined as any;

    @JsonProperty('Language', StringConverter, true)
    Language: string = undefined as any;

    @JsonProperty('CreatedAt', DateTimeConverter, true)
    CreatedAt: Date = undefined as any;

    @JsonProperty('FileType', NumberConverter, true)
    FileType: number = undefined as any;

    @JsonProperty('Locked', BooleanConverter, true)
    Locked: boolean = undefined as any;

    @JsonProperty('LockedByUserId', StringConverter, true)
    LockedByUserId: string = undefined as any;

    @JsonProperty('CheckedOut', BooleanConverter, true)
    CheckedOut: boolean = undefined as any;

    @JsonProperty('Active', BooleanConverter, true)
    Active: boolean = undefined as any;

    @JsonProperty('BaseNode', BaseNodeConverter, true)
    BaseNode: BaseNode = undefined as any;

    @JsonProperty('LockedByUser', UserConverter, true)
    LockedByUser: User = undefined as any;

    @JsonProperty('DocumentNodeCategories', DocumentNodeCategoryArrayConverter, true)
    DocumentNodeCategories: DocumentNodeCategory[] = [] as any;

    @JsonProperty('DocumentNodeVersions', DocumentNodeVersionArrayConverter, true)
    DocumentNodeVersions: DocumentNodeVersion[] = [] as any;

}

@JsonObject('DocumentNodeVersion')
export class DocumentNodeVersion {

    @JsonProperty('Id', StringConverter, true)
    Id: string = undefined as any;

    @JsonProperty('ParentId', StringConverter, true)
    ParentId: string = undefined as any;

    @JsonProperty('CreatedBy', StringConverter, true)
    CreatedBy: string = undefined as any;

    @JsonProperty('CheckSum', StringConverter, true)
    CheckSum: string = undefined as any;

    @JsonProperty('Comment', StringConverter, true)
    Comment: string = undefined as any;

    @JsonProperty('CreatedAt', DateTimeConverter, true)
    CreatedAt: Date = undefined as any;

    @JsonProperty('MineType', StringConverter, true)
    MineType: string = undefined as any;

    @JsonProperty('Version', StringConverter, true)
    Version: string = undefined as any;

    @JsonProperty('IsCurrentVersion', BooleanConverter, true)
    IsCurrentVersion: boolean = undefined as any;

    @JsonProperty('Size', NumberConverter, true)
    Size: number = undefined as any;

    @JsonProperty('PreviousId', StringConverter, true)
    PreviousId: string = undefined as any;

    @JsonProperty('CanRender', BooleanConverter, true)
    CanRender: boolean = undefined as any;

    @JsonProperty('HasRendered', BooleanConverter, true)
    HasRendered: boolean = undefined as any;

    @JsonProperty('CanExtract', BooleanConverter, true)
    CanExtract: boolean = undefined as any;

    @JsonProperty('HasExtraced', BooleanConverter, true)
    HasExtraced: boolean = undefined as any;

    @JsonProperty('RenderFilePath', StringConverter, true)
    RenderFilePath: string = undefined as any;

    @JsonProperty('IndexDirectory', StringConverter, true)
    IndexDirectory: string = undefined as any;

    @JsonProperty('FilePath', StringConverter, true)
    FilePath: string = undefined as any;

    @JsonProperty('Active', BooleanConverter, true)
    Active: boolean = undefined as any;

    @JsonProperty('CreatedByNavigation', UserConverter, true)
    CreatedByNavigation: User = undefined as any;

    @JsonProperty('Parent', DocumentNodeConverter, true)
    Parent: DocumentNode = undefined as any;

}

@JsonObject('Bookmark')
export class Bookmark {

    @JsonProperty('Id', StringConverter, true)
    Id: string = undefined as any;

    @JsonProperty('UserId', StringConverter, true)
    UserId: string = undefined as any;

    @JsonProperty('Name', StringConverter, true)
    Name: string = undefined as any;

    @JsonProperty('Type', NumberConverter, true)
    Type: number = undefined as any;

    @JsonProperty('ObjectId', StringConverter, true)
    ObjectId: string = undefined as any;

    @JsonProperty('User', UserConverter, true)
    User: User = undefined as any;

}

@JsonObject('Category')
export class Category {

    @JsonProperty('Id', StringConverter, true)
    Id: string = undefined as any;

    @JsonProperty('Name', StringConverter, true)
    Name: string = undefined as any;

    @JsonProperty('Description', StringConverter, true)
    Description: string = undefined as any;

    @JsonProperty('DocumentNodeCategories', DocumentNodeCategoryArrayConverter, true)
    DocumentNodeCategories: DocumentNodeCategory[] = [] as any;

}

@JsonObject('Department')
export class Department {

    @JsonProperty('Id', StringConverter, true)
    Id: string = undefined as any;

    @JsonProperty('DepartName', StringConverter, true)
    DepartName: string = undefined as any;

    @JsonProperty('Description', StringConverter, true)
    Description: string = undefined as any;

    @JsonProperty('RootFolderId', StringConverter, true)
    RootFolderId: string = undefined as any;

    @JsonProperty('UserDeparts', UserDepartArrayConverter, true)
    UserDeparts: UserDepart[] = [] as any;

}

@JsonObject('DocumentNodeCategory')
export class DocumentNodeCategory {

    @JsonProperty('Id', StringConverter, true)
    Id: string = undefined as any;

    @JsonProperty('DocumentNodeId', StringConverter, true)
    DocumentNodeId: string = undefined as any;

    @JsonProperty('CategoryId', StringConverter, true)
    CategoryId: string = undefined as any;

    @JsonProperty('Category', CategoryConverter, true)
    Category: Category = undefined as any;

    @JsonProperty('DocumentNode', DocumentNodeConverter, true)
    DocumentNode: DocumentNode = undefined as any;

}

@JsonObject('DocumentNodeNote')
export class DocumentNodeNote {

    @JsonProperty('Id', StringConverter, true)
    Id: string = undefined as any;

    @JsonProperty('DocumentNodeId', StringConverter, true)
    DocumentNodeId: string = undefined as any;

    @JsonProperty('CreatedById', StringConverter, true)
    CreatedById: string = undefined as any;

    @JsonProperty('Note', StringConverter, true)
    Note: string = undefined as any;

    @JsonProperty('PreviousId', StringConverter, true)
    PreviousId: string = undefined as any;

}

@JsonObject('FolderNode')
export class FolderNode {

    @JsonProperty('Id', StringConverter, true)
    Id: string = undefined as any;

    @JsonProperty('BaseNodeId', StringConverter, true)
    BaseNodeId: string = undefined as any;

    @JsonProperty('Description', StringConverter, true)
    Description: string = undefined as any;

    @JsonProperty('FilePartitionId', StringConverter, true)
    FilePartitionId: string = undefined as any;

    @JsonProperty('IndexPartitionId', StringConverter, true)
    IndexPartitionId: string = undefined as any;

    @JsonProperty('BaseNode', BaseNodeConverter, true)
    BaseNode: BaseNode = undefined as any;

    @JsonProperty('FilePartition', PartitionConverter, true)
    FilePartition: Partition = undefined as any;

    @JsonProperty('IndexPartition', PartitionConverter, true)
    IndexPartition: Partition = undefined as any;

}

@JsonObject('NodeKeyWord')
export class NodeKeyWord {

    @JsonProperty('Id', StringConverter, true)
    Id: string = undefined as any;

    @JsonProperty('BaseNodeId', StringConverter, true)
    BaseNodeId: string = undefined as any;

    @JsonProperty('KeyWord', StringConverter, true)
    KeyWord: string = undefined as any;

    @JsonProperty('BaseNode', BaseNodeConverter, true)
    BaseNode: BaseNode = undefined as any;

}

@JsonObject('PersonalNode')
export class PersonalNode {

    @JsonProperty('Id', StringConverter, true)
    Id: string = undefined as any;

    @JsonProperty('UserId', StringConverter, true)
    UserId: string = undefined as any;

    @JsonProperty('BaseNodeId', StringConverter, true)
    BaseNodeId: string = undefined as any;

    @JsonProperty('BaseNode', BaseNodeConverter, true)
    BaseNode: BaseNode = undefined as any;

    @JsonProperty('User', UserConverter, true)
    User: User = undefined as any;

    @JsonProperty('PersonalNodeShares', PersonalNodeShareArrayConverter, true)
    PersonalNodeShares: PersonalNodeShare[] = [] as any;

}

@JsonObject('PersonalNodeShare')
export class PersonalNodeShare {

    @JsonProperty('Id', StringConverter, true)
    Id: string = undefined as any;

    @JsonProperty('PersonalNodeId', StringConverter, true)
    PersonalNodeId: string = undefined as any;

    @JsonProperty('Permission', NumberConverter, true)
    Permission: number = undefined as any;

    @JsonProperty('ObjectType', NumberConverter, true)
    ObjectType: number = undefined as any;

    @JsonProperty('ObjectId', StringConverter, true)
    ObjectId: string = undefined as any;

    @JsonProperty('PersonalNode', PersonalNodeConverter, true)
    PersonalNode: PersonalNode = undefined as any;

}

@JsonObject('Role')
export class Role {

    @JsonProperty('Id', StringConverter, true)
    Id: string = undefined as any;

    @JsonProperty('RoleName', StringConverter, true)
    RoleName: string = undefined as any;

    @JsonProperty('Description', StringConverter, true)
    Description: string = undefined as any;

    @JsonProperty('RolePermissions', RolePermissionArrayConverter, true)
    RolePermissions: RolePermission[] = [] as any;

    @JsonProperty('UserRoles', UserRoleArrayConverter, true)
    UserRoles: UserRole[] = [] as any;

}

@JsonObject('RolePermission')
export class RolePermission {

    @JsonProperty('Id', StringConverter, true)
    Id: string = undefined as any;

    @JsonProperty('RoleId', StringConverter, true)
    RoleId: string = undefined as any;

    @JsonProperty('DocumentBaseId', StringConverter, true)
    DocumentBaseId: string = undefined as any;

    @JsonProperty('Permission', NumberConverter, true)
    Permission: number = undefined as any;

    @JsonProperty('DocumentBase', BaseNodeConverter, true)
    DocumentBase: BaseNode = undefined as any;

    @JsonProperty('Role', RoleConverter, true)
    Role: Role = undefined as any;

}

@JsonObject('UserDepart')
export class UserDepart {

    @JsonProperty('Id', StringConverter, true)
    Id: string = undefined as any;

    @JsonProperty('UserId', StringConverter, true)
    UserId: string = undefined as any;

    @JsonProperty('DepartId', StringConverter, true)
    DepartId: string = undefined as any;

    @JsonProperty('Depart', DepartmentConverter, true)
    Depart: Department = undefined as any;

    @JsonProperty('User', UserConverter, true)
    User: User = undefined as any;

}

@JsonObject('UserPermission')
export class UserPermission {

    @JsonProperty('Id', StringConverter, true)
    Id: string = undefined as any;

    @JsonProperty('UserId', StringConverter, true)
    UserId: string = undefined as any;

    @JsonProperty('BaseNodeId', StringConverter, true)
    BaseNodeId: string = undefined as any;

    @JsonProperty('Permission', NumberConverter, true)
    Permission: number = undefined as any;

    @JsonProperty('BaseNode', BaseNodeConverter, true)
    BaseNode: BaseNode = undefined as any;

    @JsonProperty('User', UserConverter, true)
    User: User = undefined as any;

}

@JsonObject('UserRole')
export class UserRole {

    @JsonProperty('Id', StringConverter, true)
    Id: string = undefined as any;

    @JsonProperty('UserId', StringConverter, true)
    UserId: string = undefined as any;

    @JsonProperty('RoleId', StringConverter, true)
    RoleId: string = undefined as any;

    @JsonProperty('Role', RoleConverter, true)
    Role: Role = undefined as any;

    @JsonProperty('User', UserConverter, true)
    User: User = undefined as any;

}

@JsonObject('Partition')
export class Partition {

    @JsonProperty('Id', StringConverter, true)
    Id: string = undefined as any;

    @JsonProperty('PartitionName', StringConverter, true)
    PartitionName: string = undefined as any;

    @JsonProperty('PartitionPath', StringConverter, true)
    PartitionPath: string = undefined as any;

    @JsonProperty('PartitionType', NumberConverter, true)
    PartitionType: number = undefined as any;

    @JsonProperty('FolderNodeFilePartitions', FolderNodeArrayConverter, true)
    FolderNodeFilePartitions: FolderNode[] = [] as any;

    @JsonProperty('FolderNodeIndexPartitions', FolderNodeArrayConverter, true)
    FolderNodeIndexPartitions: FolderNode[] = [] as any;

}
