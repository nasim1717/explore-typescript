// ENUMS

enum RType { SUCCESS, FAILURE, UNAUTHENTICATED, FORBIDDEN };

interface APIResponse<T> {
    status: number;
    type: RType;
    data: T;
}

const response1: APIResponse<string> = {
    status: 200,
    type: RType.SUCCESS,
    data: "test"
}