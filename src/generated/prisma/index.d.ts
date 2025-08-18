
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model StarredLogline
 * 
 */
export type StarredLogline = $Result.DefaultSelection<Prisma.$StarredLoglinePayload>
/**
 * Model StarredTheme
 * 
 */
export type StarredTheme = $Result.DefaultSelection<Prisma.$StarredThemePayload>
/**
 * Model VibeProfile
 * 
 */
export type VibeProfile = $Result.DefaultSelection<Prisma.$VibeProfilePayload>
/**
 * Model ProblemGeneration
 * 
 */
export type ProblemGeneration = $Result.DefaultSelection<Prisma.$ProblemGenerationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.starredLogline`: Exposes CRUD operations for the **StarredLogline** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StarredLoglines
    * const starredLoglines = await prisma.starredLogline.findMany()
    * ```
    */
  get starredLogline(): Prisma.StarredLoglineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.starredTheme`: Exposes CRUD operations for the **StarredTheme** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StarredThemes
    * const starredThemes = await prisma.starredTheme.findMany()
    * ```
    */
  get starredTheme(): Prisma.StarredThemeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vibeProfile`: Exposes CRUD operations for the **VibeProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VibeProfiles
    * const vibeProfiles = await prisma.vibeProfile.findMany()
    * ```
    */
  get vibeProfile(): Prisma.VibeProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.problemGeneration`: Exposes CRUD operations for the **ProblemGeneration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProblemGenerations
    * const problemGenerations = await prisma.problemGeneration.findMany()
    * ```
    */
  get problemGeneration(): Prisma.ProblemGenerationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken',
    User: 'User',
    StarredLogline: 'StarredLogline',
    StarredTheme: 'StarredTheme',
    VibeProfile: 'VibeProfile',
    ProblemGeneration: 'ProblemGeneration'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "account" | "session" | "verificationToken" | "user" | "starredLogline" | "starredTheme" | "vibeProfile" | "problemGeneration"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      StarredLogline: {
        payload: Prisma.$StarredLoglinePayload<ExtArgs>
        fields: Prisma.StarredLoglineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StarredLoglineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StarredLoglinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StarredLoglineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StarredLoglinePayload>
          }
          findFirst: {
            args: Prisma.StarredLoglineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StarredLoglinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StarredLoglineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StarredLoglinePayload>
          }
          findMany: {
            args: Prisma.StarredLoglineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StarredLoglinePayload>[]
          }
          create: {
            args: Prisma.StarredLoglineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StarredLoglinePayload>
          }
          createMany: {
            args: Prisma.StarredLoglineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StarredLoglineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StarredLoglinePayload>[]
          }
          delete: {
            args: Prisma.StarredLoglineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StarredLoglinePayload>
          }
          update: {
            args: Prisma.StarredLoglineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StarredLoglinePayload>
          }
          deleteMany: {
            args: Prisma.StarredLoglineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StarredLoglineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StarredLoglineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StarredLoglinePayload>[]
          }
          upsert: {
            args: Prisma.StarredLoglineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StarredLoglinePayload>
          }
          aggregate: {
            args: Prisma.StarredLoglineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStarredLogline>
          }
          groupBy: {
            args: Prisma.StarredLoglineGroupByArgs<ExtArgs>
            result: $Utils.Optional<StarredLoglineGroupByOutputType>[]
          }
          count: {
            args: Prisma.StarredLoglineCountArgs<ExtArgs>
            result: $Utils.Optional<StarredLoglineCountAggregateOutputType> | number
          }
        }
      }
      StarredTheme: {
        payload: Prisma.$StarredThemePayload<ExtArgs>
        fields: Prisma.StarredThemeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StarredThemeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StarredThemePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StarredThemeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StarredThemePayload>
          }
          findFirst: {
            args: Prisma.StarredThemeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StarredThemePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StarredThemeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StarredThemePayload>
          }
          findMany: {
            args: Prisma.StarredThemeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StarredThemePayload>[]
          }
          create: {
            args: Prisma.StarredThemeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StarredThemePayload>
          }
          createMany: {
            args: Prisma.StarredThemeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StarredThemeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StarredThemePayload>[]
          }
          delete: {
            args: Prisma.StarredThemeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StarredThemePayload>
          }
          update: {
            args: Prisma.StarredThemeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StarredThemePayload>
          }
          deleteMany: {
            args: Prisma.StarredThemeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StarredThemeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StarredThemeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StarredThemePayload>[]
          }
          upsert: {
            args: Prisma.StarredThemeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StarredThemePayload>
          }
          aggregate: {
            args: Prisma.StarredThemeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStarredTheme>
          }
          groupBy: {
            args: Prisma.StarredThemeGroupByArgs<ExtArgs>
            result: $Utils.Optional<StarredThemeGroupByOutputType>[]
          }
          count: {
            args: Prisma.StarredThemeCountArgs<ExtArgs>
            result: $Utils.Optional<StarredThemeCountAggregateOutputType> | number
          }
        }
      }
      VibeProfile: {
        payload: Prisma.$VibeProfilePayload<ExtArgs>
        fields: Prisma.VibeProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VibeProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VibeProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VibeProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VibeProfilePayload>
          }
          findFirst: {
            args: Prisma.VibeProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VibeProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VibeProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VibeProfilePayload>
          }
          findMany: {
            args: Prisma.VibeProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VibeProfilePayload>[]
          }
          create: {
            args: Prisma.VibeProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VibeProfilePayload>
          }
          createMany: {
            args: Prisma.VibeProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VibeProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VibeProfilePayload>[]
          }
          delete: {
            args: Prisma.VibeProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VibeProfilePayload>
          }
          update: {
            args: Prisma.VibeProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VibeProfilePayload>
          }
          deleteMany: {
            args: Prisma.VibeProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VibeProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VibeProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VibeProfilePayload>[]
          }
          upsert: {
            args: Prisma.VibeProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VibeProfilePayload>
          }
          aggregate: {
            args: Prisma.VibeProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVibeProfile>
          }
          groupBy: {
            args: Prisma.VibeProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<VibeProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.VibeProfileCountArgs<ExtArgs>
            result: $Utils.Optional<VibeProfileCountAggregateOutputType> | number
          }
        }
      }
      ProblemGeneration: {
        payload: Prisma.$ProblemGenerationPayload<ExtArgs>
        fields: Prisma.ProblemGenerationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProblemGenerationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemGenerationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProblemGenerationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemGenerationPayload>
          }
          findFirst: {
            args: Prisma.ProblemGenerationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemGenerationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProblemGenerationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemGenerationPayload>
          }
          findMany: {
            args: Prisma.ProblemGenerationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemGenerationPayload>[]
          }
          create: {
            args: Prisma.ProblemGenerationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemGenerationPayload>
          }
          createMany: {
            args: Prisma.ProblemGenerationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProblemGenerationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemGenerationPayload>[]
          }
          delete: {
            args: Prisma.ProblemGenerationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemGenerationPayload>
          }
          update: {
            args: Prisma.ProblemGenerationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemGenerationPayload>
          }
          deleteMany: {
            args: Prisma.ProblemGenerationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProblemGenerationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProblemGenerationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemGenerationPayload>[]
          }
          upsert: {
            args: Prisma.ProblemGenerationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemGenerationPayload>
          }
          aggregate: {
            args: Prisma.ProblemGenerationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProblemGeneration>
          }
          groupBy: {
            args: Prisma.ProblemGenerationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProblemGenerationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProblemGenerationCountArgs<ExtArgs>
            result: $Utils.Optional<ProblemGenerationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    account?: AccountOmit
    session?: SessionOmit
    verificationToken?: VerificationTokenOmit
    user?: UserOmit
    starredLogline?: StarredLoglineOmit
    starredTheme?: StarredThemeOmit
    vibeProfile?: VibeProfileOmit
    problemGeneration?: ProblemGenerationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
    problemGenerations: number
    vibeProfiles: number
    starredLoglines: number
    starredThemes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    problemGenerations?: boolean | UserCountOutputTypeCountProblemGenerationsArgs
    vibeProfiles?: boolean | UserCountOutputTypeCountVibeProfilesArgs
    starredLoglines?: boolean | UserCountOutputTypeCountStarredLoglinesArgs
    starredThemes?: boolean | UserCountOutputTypeCountStarredThemesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProblemGenerationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemGenerationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVibeProfilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VibeProfileWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStarredLoglinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StarredLoglineWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStarredThemesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StarredThemeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    problemGenerations?: boolean | User$problemGenerationsArgs<ExtArgs>
    vibeProfiles?: boolean | User$vibeProfilesArgs<ExtArgs>
    starredLoglines?: boolean | User$starredLoglinesArgs<ExtArgs>
    starredThemes?: boolean | User$starredThemesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    problemGenerations?: boolean | User$problemGenerationsArgs<ExtArgs>
    vibeProfiles?: boolean | User$vibeProfilesArgs<ExtArgs>
    starredLoglines?: boolean | User$starredLoglinesArgs<ExtArgs>
    starredThemes?: boolean | User$starredThemesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      problemGenerations: Prisma.$ProblemGenerationPayload<ExtArgs>[]
      vibeProfiles: Prisma.$VibeProfilePayload<ExtArgs>[]
      starredLoglines: Prisma.$StarredLoglinePayload<ExtArgs>[]
      starredThemes: Prisma.$StarredThemePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      emailVerified: Date | null
      image: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    problemGenerations<T extends User$problemGenerationsArgs<ExtArgs> = {}>(args?: Subset<T, User$problemGenerationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemGenerationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    vibeProfiles<T extends User$vibeProfilesArgs<ExtArgs> = {}>(args?: Subset<T, User$vibeProfilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VibeProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    starredLoglines<T extends User$starredLoglinesArgs<ExtArgs> = {}>(args?: Subset<T, User$starredLoglinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StarredLoglinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    starredThemes<T extends User$starredThemesArgs<ExtArgs> = {}>(args?: Subset<T, User$starredThemesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StarredThemePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.problemGenerations
   */
  export type User$problemGenerationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemGeneration
     */
    select?: ProblemGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemGeneration
     */
    omit?: ProblemGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemGenerationInclude<ExtArgs> | null
    where?: ProblemGenerationWhereInput
    orderBy?: ProblemGenerationOrderByWithRelationInput | ProblemGenerationOrderByWithRelationInput[]
    cursor?: ProblemGenerationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProblemGenerationScalarFieldEnum | ProblemGenerationScalarFieldEnum[]
  }

  /**
   * User.vibeProfiles
   */
  export type User$vibeProfilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VibeProfile
     */
    select?: VibeProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VibeProfile
     */
    omit?: VibeProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VibeProfileInclude<ExtArgs> | null
    where?: VibeProfileWhereInput
    orderBy?: VibeProfileOrderByWithRelationInput | VibeProfileOrderByWithRelationInput[]
    cursor?: VibeProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VibeProfileScalarFieldEnum | VibeProfileScalarFieldEnum[]
  }

  /**
   * User.starredLoglines
   */
  export type User$starredLoglinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StarredLogline
     */
    select?: StarredLoglineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StarredLogline
     */
    omit?: StarredLoglineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StarredLoglineInclude<ExtArgs> | null
    where?: StarredLoglineWhereInput
    orderBy?: StarredLoglineOrderByWithRelationInput | StarredLoglineOrderByWithRelationInput[]
    cursor?: StarredLoglineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StarredLoglineScalarFieldEnum | StarredLoglineScalarFieldEnum[]
  }

  /**
   * User.starredThemes
   */
  export type User$starredThemesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StarredTheme
     */
    select?: StarredThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StarredTheme
     */
    omit?: StarredThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StarredThemeInclude<ExtArgs> | null
    where?: StarredThemeWhereInput
    orderBy?: StarredThemeOrderByWithRelationInput | StarredThemeOrderByWithRelationInput[]
    cursor?: StarredThemeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StarredThemeScalarFieldEnum | StarredThemeScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model StarredLogline
   */

  export type AggregateStarredLogline = {
    _count: StarredLoglineCountAggregateOutputType | null
    _min: StarredLoglineMinAggregateOutputType | null
    _max: StarredLoglineMaxAggregateOutputType | null
  }

  export type StarredLoglineMinAggregateOutputType = {
    id: string | null
    userId: string | null
  }

  export type StarredLoglineMaxAggregateOutputType = {
    id: string | null
    userId: string | null
  }

  export type StarredLoglineCountAggregateOutputType = {
    id: number
    userId: number
    logline: number
    _all: number
  }


  export type StarredLoglineMinAggregateInputType = {
    id?: true
    userId?: true
  }

  export type StarredLoglineMaxAggregateInputType = {
    id?: true
    userId?: true
  }

  export type StarredLoglineCountAggregateInputType = {
    id?: true
    userId?: true
    logline?: true
    _all?: true
  }

  export type StarredLoglineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StarredLogline to aggregate.
     */
    where?: StarredLoglineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StarredLoglines to fetch.
     */
    orderBy?: StarredLoglineOrderByWithRelationInput | StarredLoglineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StarredLoglineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StarredLoglines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StarredLoglines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StarredLoglines
    **/
    _count?: true | StarredLoglineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StarredLoglineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StarredLoglineMaxAggregateInputType
  }

  export type GetStarredLoglineAggregateType<T extends StarredLoglineAggregateArgs> = {
        [P in keyof T & keyof AggregateStarredLogline]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStarredLogline[P]>
      : GetScalarType<T[P], AggregateStarredLogline[P]>
  }




  export type StarredLoglineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StarredLoglineWhereInput
    orderBy?: StarredLoglineOrderByWithAggregationInput | StarredLoglineOrderByWithAggregationInput[]
    by: StarredLoglineScalarFieldEnum[] | StarredLoglineScalarFieldEnum
    having?: StarredLoglineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StarredLoglineCountAggregateInputType | true
    _min?: StarredLoglineMinAggregateInputType
    _max?: StarredLoglineMaxAggregateInputType
  }

  export type StarredLoglineGroupByOutputType = {
    id: string
    userId: string
    logline: JsonValue
    _count: StarredLoglineCountAggregateOutputType | null
    _min: StarredLoglineMinAggregateOutputType | null
    _max: StarredLoglineMaxAggregateOutputType | null
  }

  type GetStarredLoglineGroupByPayload<T extends StarredLoglineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StarredLoglineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StarredLoglineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StarredLoglineGroupByOutputType[P]>
            : GetScalarType<T[P], StarredLoglineGroupByOutputType[P]>
        }
      >
    >


  export type StarredLoglineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    logline?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["starredLogline"]>

  export type StarredLoglineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    logline?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["starredLogline"]>

  export type StarredLoglineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    logline?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["starredLogline"]>

  export type StarredLoglineSelectScalar = {
    id?: boolean
    userId?: boolean
    logline?: boolean
  }

  export type StarredLoglineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "logline", ExtArgs["result"]["starredLogline"]>
  export type StarredLoglineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StarredLoglineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StarredLoglineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StarredLoglinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StarredLogline"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      logline: Prisma.JsonValue
    }, ExtArgs["result"]["starredLogline"]>
    composites: {}
  }

  type StarredLoglineGetPayload<S extends boolean | null | undefined | StarredLoglineDefaultArgs> = $Result.GetResult<Prisma.$StarredLoglinePayload, S>

  type StarredLoglineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StarredLoglineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StarredLoglineCountAggregateInputType | true
    }

  export interface StarredLoglineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StarredLogline'], meta: { name: 'StarredLogline' } }
    /**
     * Find zero or one StarredLogline that matches the filter.
     * @param {StarredLoglineFindUniqueArgs} args - Arguments to find a StarredLogline
     * @example
     * // Get one StarredLogline
     * const starredLogline = await prisma.starredLogline.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StarredLoglineFindUniqueArgs>(args: SelectSubset<T, StarredLoglineFindUniqueArgs<ExtArgs>>): Prisma__StarredLoglineClient<$Result.GetResult<Prisma.$StarredLoglinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StarredLogline that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StarredLoglineFindUniqueOrThrowArgs} args - Arguments to find a StarredLogline
     * @example
     * // Get one StarredLogline
     * const starredLogline = await prisma.starredLogline.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StarredLoglineFindUniqueOrThrowArgs>(args: SelectSubset<T, StarredLoglineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StarredLoglineClient<$Result.GetResult<Prisma.$StarredLoglinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StarredLogline that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StarredLoglineFindFirstArgs} args - Arguments to find a StarredLogline
     * @example
     * // Get one StarredLogline
     * const starredLogline = await prisma.starredLogline.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StarredLoglineFindFirstArgs>(args?: SelectSubset<T, StarredLoglineFindFirstArgs<ExtArgs>>): Prisma__StarredLoglineClient<$Result.GetResult<Prisma.$StarredLoglinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StarredLogline that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StarredLoglineFindFirstOrThrowArgs} args - Arguments to find a StarredLogline
     * @example
     * // Get one StarredLogline
     * const starredLogline = await prisma.starredLogline.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StarredLoglineFindFirstOrThrowArgs>(args?: SelectSubset<T, StarredLoglineFindFirstOrThrowArgs<ExtArgs>>): Prisma__StarredLoglineClient<$Result.GetResult<Prisma.$StarredLoglinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StarredLoglines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StarredLoglineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StarredLoglines
     * const starredLoglines = await prisma.starredLogline.findMany()
     * 
     * // Get first 10 StarredLoglines
     * const starredLoglines = await prisma.starredLogline.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const starredLoglineWithIdOnly = await prisma.starredLogline.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StarredLoglineFindManyArgs>(args?: SelectSubset<T, StarredLoglineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StarredLoglinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StarredLogline.
     * @param {StarredLoglineCreateArgs} args - Arguments to create a StarredLogline.
     * @example
     * // Create one StarredLogline
     * const StarredLogline = await prisma.starredLogline.create({
     *   data: {
     *     // ... data to create a StarredLogline
     *   }
     * })
     * 
     */
    create<T extends StarredLoglineCreateArgs>(args: SelectSubset<T, StarredLoglineCreateArgs<ExtArgs>>): Prisma__StarredLoglineClient<$Result.GetResult<Prisma.$StarredLoglinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StarredLoglines.
     * @param {StarredLoglineCreateManyArgs} args - Arguments to create many StarredLoglines.
     * @example
     * // Create many StarredLoglines
     * const starredLogline = await prisma.starredLogline.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StarredLoglineCreateManyArgs>(args?: SelectSubset<T, StarredLoglineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StarredLoglines and returns the data saved in the database.
     * @param {StarredLoglineCreateManyAndReturnArgs} args - Arguments to create many StarredLoglines.
     * @example
     * // Create many StarredLoglines
     * const starredLogline = await prisma.starredLogline.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StarredLoglines and only return the `id`
     * const starredLoglineWithIdOnly = await prisma.starredLogline.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StarredLoglineCreateManyAndReturnArgs>(args?: SelectSubset<T, StarredLoglineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StarredLoglinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StarredLogline.
     * @param {StarredLoglineDeleteArgs} args - Arguments to delete one StarredLogline.
     * @example
     * // Delete one StarredLogline
     * const StarredLogline = await prisma.starredLogline.delete({
     *   where: {
     *     // ... filter to delete one StarredLogline
     *   }
     * })
     * 
     */
    delete<T extends StarredLoglineDeleteArgs>(args: SelectSubset<T, StarredLoglineDeleteArgs<ExtArgs>>): Prisma__StarredLoglineClient<$Result.GetResult<Prisma.$StarredLoglinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StarredLogline.
     * @param {StarredLoglineUpdateArgs} args - Arguments to update one StarredLogline.
     * @example
     * // Update one StarredLogline
     * const starredLogline = await prisma.starredLogline.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StarredLoglineUpdateArgs>(args: SelectSubset<T, StarredLoglineUpdateArgs<ExtArgs>>): Prisma__StarredLoglineClient<$Result.GetResult<Prisma.$StarredLoglinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StarredLoglines.
     * @param {StarredLoglineDeleteManyArgs} args - Arguments to filter StarredLoglines to delete.
     * @example
     * // Delete a few StarredLoglines
     * const { count } = await prisma.starredLogline.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StarredLoglineDeleteManyArgs>(args?: SelectSubset<T, StarredLoglineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StarredLoglines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StarredLoglineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StarredLoglines
     * const starredLogline = await prisma.starredLogline.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StarredLoglineUpdateManyArgs>(args: SelectSubset<T, StarredLoglineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StarredLoglines and returns the data updated in the database.
     * @param {StarredLoglineUpdateManyAndReturnArgs} args - Arguments to update many StarredLoglines.
     * @example
     * // Update many StarredLoglines
     * const starredLogline = await prisma.starredLogline.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StarredLoglines and only return the `id`
     * const starredLoglineWithIdOnly = await prisma.starredLogline.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StarredLoglineUpdateManyAndReturnArgs>(args: SelectSubset<T, StarredLoglineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StarredLoglinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StarredLogline.
     * @param {StarredLoglineUpsertArgs} args - Arguments to update or create a StarredLogline.
     * @example
     * // Update or create a StarredLogline
     * const starredLogline = await prisma.starredLogline.upsert({
     *   create: {
     *     // ... data to create a StarredLogline
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StarredLogline we want to update
     *   }
     * })
     */
    upsert<T extends StarredLoglineUpsertArgs>(args: SelectSubset<T, StarredLoglineUpsertArgs<ExtArgs>>): Prisma__StarredLoglineClient<$Result.GetResult<Prisma.$StarredLoglinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StarredLoglines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StarredLoglineCountArgs} args - Arguments to filter StarredLoglines to count.
     * @example
     * // Count the number of StarredLoglines
     * const count = await prisma.starredLogline.count({
     *   where: {
     *     // ... the filter for the StarredLoglines we want to count
     *   }
     * })
    **/
    count<T extends StarredLoglineCountArgs>(
      args?: Subset<T, StarredLoglineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StarredLoglineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StarredLogline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StarredLoglineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StarredLoglineAggregateArgs>(args: Subset<T, StarredLoglineAggregateArgs>): Prisma.PrismaPromise<GetStarredLoglineAggregateType<T>>

    /**
     * Group by StarredLogline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StarredLoglineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StarredLoglineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StarredLoglineGroupByArgs['orderBy'] }
        : { orderBy?: StarredLoglineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StarredLoglineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStarredLoglineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StarredLogline model
   */
  readonly fields: StarredLoglineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StarredLogline.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StarredLoglineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StarredLogline model
   */
  interface StarredLoglineFieldRefs {
    readonly id: FieldRef<"StarredLogline", 'String'>
    readonly userId: FieldRef<"StarredLogline", 'String'>
    readonly logline: FieldRef<"StarredLogline", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * StarredLogline findUnique
   */
  export type StarredLoglineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StarredLogline
     */
    select?: StarredLoglineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StarredLogline
     */
    omit?: StarredLoglineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StarredLoglineInclude<ExtArgs> | null
    /**
     * Filter, which StarredLogline to fetch.
     */
    where: StarredLoglineWhereUniqueInput
  }

  /**
   * StarredLogline findUniqueOrThrow
   */
  export type StarredLoglineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StarredLogline
     */
    select?: StarredLoglineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StarredLogline
     */
    omit?: StarredLoglineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StarredLoglineInclude<ExtArgs> | null
    /**
     * Filter, which StarredLogline to fetch.
     */
    where: StarredLoglineWhereUniqueInput
  }

  /**
   * StarredLogline findFirst
   */
  export type StarredLoglineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StarredLogline
     */
    select?: StarredLoglineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StarredLogline
     */
    omit?: StarredLoglineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StarredLoglineInclude<ExtArgs> | null
    /**
     * Filter, which StarredLogline to fetch.
     */
    where?: StarredLoglineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StarredLoglines to fetch.
     */
    orderBy?: StarredLoglineOrderByWithRelationInput | StarredLoglineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StarredLoglines.
     */
    cursor?: StarredLoglineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StarredLoglines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StarredLoglines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StarredLoglines.
     */
    distinct?: StarredLoglineScalarFieldEnum | StarredLoglineScalarFieldEnum[]
  }

  /**
   * StarredLogline findFirstOrThrow
   */
  export type StarredLoglineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StarredLogline
     */
    select?: StarredLoglineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StarredLogline
     */
    omit?: StarredLoglineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StarredLoglineInclude<ExtArgs> | null
    /**
     * Filter, which StarredLogline to fetch.
     */
    where?: StarredLoglineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StarredLoglines to fetch.
     */
    orderBy?: StarredLoglineOrderByWithRelationInput | StarredLoglineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StarredLoglines.
     */
    cursor?: StarredLoglineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StarredLoglines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StarredLoglines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StarredLoglines.
     */
    distinct?: StarredLoglineScalarFieldEnum | StarredLoglineScalarFieldEnum[]
  }

  /**
   * StarredLogline findMany
   */
  export type StarredLoglineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StarredLogline
     */
    select?: StarredLoglineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StarredLogline
     */
    omit?: StarredLoglineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StarredLoglineInclude<ExtArgs> | null
    /**
     * Filter, which StarredLoglines to fetch.
     */
    where?: StarredLoglineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StarredLoglines to fetch.
     */
    orderBy?: StarredLoglineOrderByWithRelationInput | StarredLoglineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StarredLoglines.
     */
    cursor?: StarredLoglineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StarredLoglines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StarredLoglines.
     */
    skip?: number
    distinct?: StarredLoglineScalarFieldEnum | StarredLoglineScalarFieldEnum[]
  }

  /**
   * StarredLogline create
   */
  export type StarredLoglineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StarredLogline
     */
    select?: StarredLoglineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StarredLogline
     */
    omit?: StarredLoglineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StarredLoglineInclude<ExtArgs> | null
    /**
     * The data needed to create a StarredLogline.
     */
    data: XOR<StarredLoglineCreateInput, StarredLoglineUncheckedCreateInput>
  }

  /**
   * StarredLogline createMany
   */
  export type StarredLoglineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StarredLoglines.
     */
    data: StarredLoglineCreateManyInput | StarredLoglineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StarredLogline createManyAndReturn
   */
  export type StarredLoglineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StarredLogline
     */
    select?: StarredLoglineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StarredLogline
     */
    omit?: StarredLoglineOmit<ExtArgs> | null
    /**
     * The data used to create many StarredLoglines.
     */
    data: StarredLoglineCreateManyInput | StarredLoglineCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StarredLoglineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StarredLogline update
   */
  export type StarredLoglineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StarredLogline
     */
    select?: StarredLoglineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StarredLogline
     */
    omit?: StarredLoglineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StarredLoglineInclude<ExtArgs> | null
    /**
     * The data needed to update a StarredLogline.
     */
    data: XOR<StarredLoglineUpdateInput, StarredLoglineUncheckedUpdateInput>
    /**
     * Choose, which StarredLogline to update.
     */
    where: StarredLoglineWhereUniqueInput
  }

  /**
   * StarredLogline updateMany
   */
  export type StarredLoglineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StarredLoglines.
     */
    data: XOR<StarredLoglineUpdateManyMutationInput, StarredLoglineUncheckedUpdateManyInput>
    /**
     * Filter which StarredLoglines to update
     */
    where?: StarredLoglineWhereInput
    /**
     * Limit how many StarredLoglines to update.
     */
    limit?: number
  }

  /**
   * StarredLogline updateManyAndReturn
   */
  export type StarredLoglineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StarredLogline
     */
    select?: StarredLoglineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StarredLogline
     */
    omit?: StarredLoglineOmit<ExtArgs> | null
    /**
     * The data used to update StarredLoglines.
     */
    data: XOR<StarredLoglineUpdateManyMutationInput, StarredLoglineUncheckedUpdateManyInput>
    /**
     * Filter which StarredLoglines to update
     */
    where?: StarredLoglineWhereInput
    /**
     * Limit how many StarredLoglines to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StarredLoglineIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StarredLogline upsert
   */
  export type StarredLoglineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StarredLogline
     */
    select?: StarredLoglineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StarredLogline
     */
    omit?: StarredLoglineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StarredLoglineInclude<ExtArgs> | null
    /**
     * The filter to search for the StarredLogline to update in case it exists.
     */
    where: StarredLoglineWhereUniqueInput
    /**
     * In case the StarredLogline found by the `where` argument doesn't exist, create a new StarredLogline with this data.
     */
    create: XOR<StarredLoglineCreateInput, StarredLoglineUncheckedCreateInput>
    /**
     * In case the StarredLogline was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StarredLoglineUpdateInput, StarredLoglineUncheckedUpdateInput>
  }

  /**
   * StarredLogline delete
   */
  export type StarredLoglineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StarredLogline
     */
    select?: StarredLoglineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StarredLogline
     */
    omit?: StarredLoglineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StarredLoglineInclude<ExtArgs> | null
    /**
     * Filter which StarredLogline to delete.
     */
    where: StarredLoglineWhereUniqueInput
  }

  /**
   * StarredLogline deleteMany
   */
  export type StarredLoglineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StarredLoglines to delete
     */
    where?: StarredLoglineWhereInput
    /**
     * Limit how many StarredLoglines to delete.
     */
    limit?: number
  }

  /**
   * StarredLogline without action
   */
  export type StarredLoglineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StarredLogline
     */
    select?: StarredLoglineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StarredLogline
     */
    omit?: StarredLoglineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StarredLoglineInclude<ExtArgs> | null
  }


  /**
   * Model StarredTheme
   */

  export type AggregateStarredTheme = {
    _count: StarredThemeCountAggregateOutputType | null
    _min: StarredThemeMinAggregateOutputType | null
    _max: StarredThemeMaxAggregateOutputType | null
  }

  export type StarredThemeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    theme: string | null
  }

  export type StarredThemeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    theme: string | null
  }

  export type StarredThemeCountAggregateOutputType = {
    id: number
    userId: number
    theme: number
    _all: number
  }


  export type StarredThemeMinAggregateInputType = {
    id?: true
    userId?: true
    theme?: true
  }

  export type StarredThemeMaxAggregateInputType = {
    id?: true
    userId?: true
    theme?: true
  }

  export type StarredThemeCountAggregateInputType = {
    id?: true
    userId?: true
    theme?: true
    _all?: true
  }

  export type StarredThemeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StarredTheme to aggregate.
     */
    where?: StarredThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StarredThemes to fetch.
     */
    orderBy?: StarredThemeOrderByWithRelationInput | StarredThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StarredThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StarredThemes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StarredThemes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StarredThemes
    **/
    _count?: true | StarredThemeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StarredThemeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StarredThemeMaxAggregateInputType
  }

  export type GetStarredThemeAggregateType<T extends StarredThemeAggregateArgs> = {
        [P in keyof T & keyof AggregateStarredTheme]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStarredTheme[P]>
      : GetScalarType<T[P], AggregateStarredTheme[P]>
  }




  export type StarredThemeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StarredThemeWhereInput
    orderBy?: StarredThemeOrderByWithAggregationInput | StarredThemeOrderByWithAggregationInput[]
    by: StarredThemeScalarFieldEnum[] | StarredThemeScalarFieldEnum
    having?: StarredThemeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StarredThemeCountAggregateInputType | true
    _min?: StarredThemeMinAggregateInputType
    _max?: StarredThemeMaxAggregateInputType
  }

  export type StarredThemeGroupByOutputType = {
    id: string
    userId: string
    theme: string
    _count: StarredThemeCountAggregateOutputType | null
    _min: StarredThemeMinAggregateOutputType | null
    _max: StarredThemeMaxAggregateOutputType | null
  }

  type GetStarredThemeGroupByPayload<T extends StarredThemeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StarredThemeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StarredThemeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StarredThemeGroupByOutputType[P]>
            : GetScalarType<T[P], StarredThemeGroupByOutputType[P]>
        }
      >
    >


  export type StarredThemeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    theme?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["starredTheme"]>

  export type StarredThemeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    theme?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["starredTheme"]>

  export type StarredThemeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    theme?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["starredTheme"]>

  export type StarredThemeSelectScalar = {
    id?: boolean
    userId?: boolean
    theme?: boolean
  }

  export type StarredThemeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "theme", ExtArgs["result"]["starredTheme"]>
  export type StarredThemeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StarredThemeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StarredThemeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StarredThemePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StarredTheme"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      theme: string
    }, ExtArgs["result"]["starredTheme"]>
    composites: {}
  }

  type StarredThemeGetPayload<S extends boolean | null | undefined | StarredThemeDefaultArgs> = $Result.GetResult<Prisma.$StarredThemePayload, S>

  type StarredThemeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StarredThemeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StarredThemeCountAggregateInputType | true
    }

  export interface StarredThemeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StarredTheme'], meta: { name: 'StarredTheme' } }
    /**
     * Find zero or one StarredTheme that matches the filter.
     * @param {StarredThemeFindUniqueArgs} args - Arguments to find a StarredTheme
     * @example
     * // Get one StarredTheme
     * const starredTheme = await prisma.starredTheme.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StarredThemeFindUniqueArgs>(args: SelectSubset<T, StarredThemeFindUniqueArgs<ExtArgs>>): Prisma__StarredThemeClient<$Result.GetResult<Prisma.$StarredThemePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StarredTheme that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StarredThemeFindUniqueOrThrowArgs} args - Arguments to find a StarredTheme
     * @example
     * // Get one StarredTheme
     * const starredTheme = await prisma.starredTheme.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StarredThemeFindUniqueOrThrowArgs>(args: SelectSubset<T, StarredThemeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StarredThemeClient<$Result.GetResult<Prisma.$StarredThemePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StarredTheme that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StarredThemeFindFirstArgs} args - Arguments to find a StarredTheme
     * @example
     * // Get one StarredTheme
     * const starredTheme = await prisma.starredTheme.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StarredThemeFindFirstArgs>(args?: SelectSubset<T, StarredThemeFindFirstArgs<ExtArgs>>): Prisma__StarredThemeClient<$Result.GetResult<Prisma.$StarredThemePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StarredTheme that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StarredThemeFindFirstOrThrowArgs} args - Arguments to find a StarredTheme
     * @example
     * // Get one StarredTheme
     * const starredTheme = await prisma.starredTheme.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StarredThemeFindFirstOrThrowArgs>(args?: SelectSubset<T, StarredThemeFindFirstOrThrowArgs<ExtArgs>>): Prisma__StarredThemeClient<$Result.GetResult<Prisma.$StarredThemePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StarredThemes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StarredThemeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StarredThemes
     * const starredThemes = await prisma.starredTheme.findMany()
     * 
     * // Get first 10 StarredThemes
     * const starredThemes = await prisma.starredTheme.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const starredThemeWithIdOnly = await prisma.starredTheme.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StarredThemeFindManyArgs>(args?: SelectSubset<T, StarredThemeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StarredThemePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StarredTheme.
     * @param {StarredThemeCreateArgs} args - Arguments to create a StarredTheme.
     * @example
     * // Create one StarredTheme
     * const StarredTheme = await prisma.starredTheme.create({
     *   data: {
     *     // ... data to create a StarredTheme
     *   }
     * })
     * 
     */
    create<T extends StarredThemeCreateArgs>(args: SelectSubset<T, StarredThemeCreateArgs<ExtArgs>>): Prisma__StarredThemeClient<$Result.GetResult<Prisma.$StarredThemePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StarredThemes.
     * @param {StarredThemeCreateManyArgs} args - Arguments to create many StarredThemes.
     * @example
     * // Create many StarredThemes
     * const starredTheme = await prisma.starredTheme.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StarredThemeCreateManyArgs>(args?: SelectSubset<T, StarredThemeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StarredThemes and returns the data saved in the database.
     * @param {StarredThemeCreateManyAndReturnArgs} args - Arguments to create many StarredThemes.
     * @example
     * // Create many StarredThemes
     * const starredTheme = await prisma.starredTheme.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StarredThemes and only return the `id`
     * const starredThemeWithIdOnly = await prisma.starredTheme.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StarredThemeCreateManyAndReturnArgs>(args?: SelectSubset<T, StarredThemeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StarredThemePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StarredTheme.
     * @param {StarredThemeDeleteArgs} args - Arguments to delete one StarredTheme.
     * @example
     * // Delete one StarredTheme
     * const StarredTheme = await prisma.starredTheme.delete({
     *   where: {
     *     // ... filter to delete one StarredTheme
     *   }
     * })
     * 
     */
    delete<T extends StarredThemeDeleteArgs>(args: SelectSubset<T, StarredThemeDeleteArgs<ExtArgs>>): Prisma__StarredThemeClient<$Result.GetResult<Prisma.$StarredThemePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StarredTheme.
     * @param {StarredThemeUpdateArgs} args - Arguments to update one StarredTheme.
     * @example
     * // Update one StarredTheme
     * const starredTheme = await prisma.starredTheme.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StarredThemeUpdateArgs>(args: SelectSubset<T, StarredThemeUpdateArgs<ExtArgs>>): Prisma__StarredThemeClient<$Result.GetResult<Prisma.$StarredThemePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StarredThemes.
     * @param {StarredThemeDeleteManyArgs} args - Arguments to filter StarredThemes to delete.
     * @example
     * // Delete a few StarredThemes
     * const { count } = await prisma.starredTheme.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StarredThemeDeleteManyArgs>(args?: SelectSubset<T, StarredThemeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StarredThemes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StarredThemeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StarredThemes
     * const starredTheme = await prisma.starredTheme.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StarredThemeUpdateManyArgs>(args: SelectSubset<T, StarredThemeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StarredThemes and returns the data updated in the database.
     * @param {StarredThemeUpdateManyAndReturnArgs} args - Arguments to update many StarredThemes.
     * @example
     * // Update many StarredThemes
     * const starredTheme = await prisma.starredTheme.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StarredThemes and only return the `id`
     * const starredThemeWithIdOnly = await prisma.starredTheme.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StarredThemeUpdateManyAndReturnArgs>(args: SelectSubset<T, StarredThemeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StarredThemePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StarredTheme.
     * @param {StarredThemeUpsertArgs} args - Arguments to update or create a StarredTheme.
     * @example
     * // Update or create a StarredTheme
     * const starredTheme = await prisma.starredTheme.upsert({
     *   create: {
     *     // ... data to create a StarredTheme
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StarredTheme we want to update
     *   }
     * })
     */
    upsert<T extends StarredThemeUpsertArgs>(args: SelectSubset<T, StarredThemeUpsertArgs<ExtArgs>>): Prisma__StarredThemeClient<$Result.GetResult<Prisma.$StarredThemePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StarredThemes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StarredThemeCountArgs} args - Arguments to filter StarredThemes to count.
     * @example
     * // Count the number of StarredThemes
     * const count = await prisma.starredTheme.count({
     *   where: {
     *     // ... the filter for the StarredThemes we want to count
     *   }
     * })
    **/
    count<T extends StarredThemeCountArgs>(
      args?: Subset<T, StarredThemeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StarredThemeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StarredTheme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StarredThemeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StarredThemeAggregateArgs>(args: Subset<T, StarredThemeAggregateArgs>): Prisma.PrismaPromise<GetStarredThemeAggregateType<T>>

    /**
     * Group by StarredTheme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StarredThemeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StarredThemeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StarredThemeGroupByArgs['orderBy'] }
        : { orderBy?: StarredThemeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StarredThemeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStarredThemeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StarredTheme model
   */
  readonly fields: StarredThemeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StarredTheme.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StarredThemeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StarredTheme model
   */
  interface StarredThemeFieldRefs {
    readonly id: FieldRef<"StarredTheme", 'String'>
    readonly userId: FieldRef<"StarredTheme", 'String'>
    readonly theme: FieldRef<"StarredTheme", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StarredTheme findUnique
   */
  export type StarredThemeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StarredTheme
     */
    select?: StarredThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StarredTheme
     */
    omit?: StarredThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StarredThemeInclude<ExtArgs> | null
    /**
     * Filter, which StarredTheme to fetch.
     */
    where: StarredThemeWhereUniqueInput
  }

  /**
   * StarredTheme findUniqueOrThrow
   */
  export type StarredThemeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StarredTheme
     */
    select?: StarredThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StarredTheme
     */
    omit?: StarredThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StarredThemeInclude<ExtArgs> | null
    /**
     * Filter, which StarredTheme to fetch.
     */
    where: StarredThemeWhereUniqueInput
  }

  /**
   * StarredTheme findFirst
   */
  export type StarredThemeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StarredTheme
     */
    select?: StarredThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StarredTheme
     */
    omit?: StarredThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StarredThemeInclude<ExtArgs> | null
    /**
     * Filter, which StarredTheme to fetch.
     */
    where?: StarredThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StarredThemes to fetch.
     */
    orderBy?: StarredThemeOrderByWithRelationInput | StarredThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StarredThemes.
     */
    cursor?: StarredThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StarredThemes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StarredThemes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StarredThemes.
     */
    distinct?: StarredThemeScalarFieldEnum | StarredThemeScalarFieldEnum[]
  }

  /**
   * StarredTheme findFirstOrThrow
   */
  export type StarredThemeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StarredTheme
     */
    select?: StarredThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StarredTheme
     */
    omit?: StarredThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StarredThemeInclude<ExtArgs> | null
    /**
     * Filter, which StarredTheme to fetch.
     */
    where?: StarredThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StarredThemes to fetch.
     */
    orderBy?: StarredThemeOrderByWithRelationInput | StarredThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StarredThemes.
     */
    cursor?: StarredThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StarredThemes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StarredThemes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StarredThemes.
     */
    distinct?: StarredThemeScalarFieldEnum | StarredThemeScalarFieldEnum[]
  }

  /**
   * StarredTheme findMany
   */
  export type StarredThemeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StarredTheme
     */
    select?: StarredThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StarredTheme
     */
    omit?: StarredThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StarredThemeInclude<ExtArgs> | null
    /**
     * Filter, which StarredThemes to fetch.
     */
    where?: StarredThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StarredThemes to fetch.
     */
    orderBy?: StarredThemeOrderByWithRelationInput | StarredThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StarredThemes.
     */
    cursor?: StarredThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StarredThemes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StarredThemes.
     */
    skip?: number
    distinct?: StarredThemeScalarFieldEnum | StarredThemeScalarFieldEnum[]
  }

  /**
   * StarredTheme create
   */
  export type StarredThemeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StarredTheme
     */
    select?: StarredThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StarredTheme
     */
    omit?: StarredThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StarredThemeInclude<ExtArgs> | null
    /**
     * The data needed to create a StarredTheme.
     */
    data: XOR<StarredThemeCreateInput, StarredThemeUncheckedCreateInput>
  }

  /**
   * StarredTheme createMany
   */
  export type StarredThemeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StarredThemes.
     */
    data: StarredThemeCreateManyInput | StarredThemeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StarredTheme createManyAndReturn
   */
  export type StarredThemeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StarredTheme
     */
    select?: StarredThemeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StarredTheme
     */
    omit?: StarredThemeOmit<ExtArgs> | null
    /**
     * The data used to create many StarredThemes.
     */
    data: StarredThemeCreateManyInput | StarredThemeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StarredThemeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StarredTheme update
   */
  export type StarredThemeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StarredTheme
     */
    select?: StarredThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StarredTheme
     */
    omit?: StarredThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StarredThemeInclude<ExtArgs> | null
    /**
     * The data needed to update a StarredTheme.
     */
    data: XOR<StarredThemeUpdateInput, StarredThemeUncheckedUpdateInput>
    /**
     * Choose, which StarredTheme to update.
     */
    where: StarredThemeWhereUniqueInput
  }

  /**
   * StarredTheme updateMany
   */
  export type StarredThemeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StarredThemes.
     */
    data: XOR<StarredThemeUpdateManyMutationInput, StarredThemeUncheckedUpdateManyInput>
    /**
     * Filter which StarredThemes to update
     */
    where?: StarredThemeWhereInput
    /**
     * Limit how many StarredThemes to update.
     */
    limit?: number
  }

  /**
   * StarredTheme updateManyAndReturn
   */
  export type StarredThemeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StarredTheme
     */
    select?: StarredThemeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StarredTheme
     */
    omit?: StarredThemeOmit<ExtArgs> | null
    /**
     * The data used to update StarredThemes.
     */
    data: XOR<StarredThemeUpdateManyMutationInput, StarredThemeUncheckedUpdateManyInput>
    /**
     * Filter which StarredThemes to update
     */
    where?: StarredThemeWhereInput
    /**
     * Limit how many StarredThemes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StarredThemeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StarredTheme upsert
   */
  export type StarredThemeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StarredTheme
     */
    select?: StarredThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StarredTheme
     */
    omit?: StarredThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StarredThemeInclude<ExtArgs> | null
    /**
     * The filter to search for the StarredTheme to update in case it exists.
     */
    where: StarredThemeWhereUniqueInput
    /**
     * In case the StarredTheme found by the `where` argument doesn't exist, create a new StarredTheme with this data.
     */
    create: XOR<StarredThemeCreateInput, StarredThemeUncheckedCreateInput>
    /**
     * In case the StarredTheme was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StarredThemeUpdateInput, StarredThemeUncheckedUpdateInput>
  }

  /**
   * StarredTheme delete
   */
  export type StarredThemeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StarredTheme
     */
    select?: StarredThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StarredTheme
     */
    omit?: StarredThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StarredThemeInclude<ExtArgs> | null
    /**
     * Filter which StarredTheme to delete.
     */
    where: StarredThemeWhereUniqueInput
  }

  /**
   * StarredTheme deleteMany
   */
  export type StarredThemeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StarredThemes to delete
     */
    where?: StarredThemeWhereInput
    /**
     * Limit how many StarredThemes to delete.
     */
    limit?: number
  }

  /**
   * StarredTheme without action
   */
  export type StarredThemeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StarredTheme
     */
    select?: StarredThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StarredTheme
     */
    omit?: StarredThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StarredThemeInclude<ExtArgs> | null
  }


  /**
   * Model VibeProfile
   */

  export type AggregateVibeProfile = {
    _count: VibeProfileCountAggregateOutputType | null
    _min: VibeProfileMinAggregateOutputType | null
    _max: VibeProfileMaxAggregateOutputType | null
  }

  export type VibeProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
  }

  export type VibeProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
  }

  export type VibeProfileCountAggregateOutputType = {
    id: number
    userId: number
    vibeProfile: number
    _all: number
  }


  export type VibeProfileMinAggregateInputType = {
    id?: true
    userId?: true
  }

  export type VibeProfileMaxAggregateInputType = {
    id?: true
    userId?: true
  }

  export type VibeProfileCountAggregateInputType = {
    id?: true
    userId?: true
    vibeProfile?: true
    _all?: true
  }

  export type VibeProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VibeProfile to aggregate.
     */
    where?: VibeProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VibeProfiles to fetch.
     */
    orderBy?: VibeProfileOrderByWithRelationInput | VibeProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VibeProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VibeProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VibeProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VibeProfiles
    **/
    _count?: true | VibeProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VibeProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VibeProfileMaxAggregateInputType
  }

  export type GetVibeProfileAggregateType<T extends VibeProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateVibeProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVibeProfile[P]>
      : GetScalarType<T[P], AggregateVibeProfile[P]>
  }




  export type VibeProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VibeProfileWhereInput
    orderBy?: VibeProfileOrderByWithAggregationInput | VibeProfileOrderByWithAggregationInput[]
    by: VibeProfileScalarFieldEnum[] | VibeProfileScalarFieldEnum
    having?: VibeProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VibeProfileCountAggregateInputType | true
    _min?: VibeProfileMinAggregateInputType
    _max?: VibeProfileMaxAggregateInputType
  }

  export type VibeProfileGroupByOutputType = {
    id: string
    userId: string
    vibeProfile: JsonValue
    _count: VibeProfileCountAggregateOutputType | null
    _min: VibeProfileMinAggregateOutputType | null
    _max: VibeProfileMaxAggregateOutputType | null
  }

  type GetVibeProfileGroupByPayload<T extends VibeProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VibeProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VibeProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VibeProfileGroupByOutputType[P]>
            : GetScalarType<T[P], VibeProfileGroupByOutputType[P]>
        }
      >
    >


  export type VibeProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    vibeProfile?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vibeProfile"]>

  export type VibeProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    vibeProfile?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vibeProfile"]>

  export type VibeProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    vibeProfile?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vibeProfile"]>

  export type VibeProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    vibeProfile?: boolean
  }

  export type VibeProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "vibeProfile", ExtArgs["result"]["vibeProfile"]>
  export type VibeProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VibeProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VibeProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VibeProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VibeProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      vibeProfile: Prisma.JsonValue
    }, ExtArgs["result"]["vibeProfile"]>
    composites: {}
  }

  type VibeProfileGetPayload<S extends boolean | null | undefined | VibeProfileDefaultArgs> = $Result.GetResult<Prisma.$VibeProfilePayload, S>

  type VibeProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VibeProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VibeProfileCountAggregateInputType | true
    }

  export interface VibeProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VibeProfile'], meta: { name: 'VibeProfile' } }
    /**
     * Find zero or one VibeProfile that matches the filter.
     * @param {VibeProfileFindUniqueArgs} args - Arguments to find a VibeProfile
     * @example
     * // Get one VibeProfile
     * const vibeProfile = await prisma.vibeProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VibeProfileFindUniqueArgs>(args: SelectSubset<T, VibeProfileFindUniqueArgs<ExtArgs>>): Prisma__VibeProfileClient<$Result.GetResult<Prisma.$VibeProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VibeProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VibeProfileFindUniqueOrThrowArgs} args - Arguments to find a VibeProfile
     * @example
     * // Get one VibeProfile
     * const vibeProfile = await prisma.vibeProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VibeProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, VibeProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VibeProfileClient<$Result.GetResult<Prisma.$VibeProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VibeProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VibeProfileFindFirstArgs} args - Arguments to find a VibeProfile
     * @example
     * // Get one VibeProfile
     * const vibeProfile = await prisma.vibeProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VibeProfileFindFirstArgs>(args?: SelectSubset<T, VibeProfileFindFirstArgs<ExtArgs>>): Prisma__VibeProfileClient<$Result.GetResult<Prisma.$VibeProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VibeProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VibeProfileFindFirstOrThrowArgs} args - Arguments to find a VibeProfile
     * @example
     * // Get one VibeProfile
     * const vibeProfile = await prisma.vibeProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VibeProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, VibeProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__VibeProfileClient<$Result.GetResult<Prisma.$VibeProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VibeProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VibeProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VibeProfiles
     * const vibeProfiles = await prisma.vibeProfile.findMany()
     * 
     * // Get first 10 VibeProfiles
     * const vibeProfiles = await prisma.vibeProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vibeProfileWithIdOnly = await prisma.vibeProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VibeProfileFindManyArgs>(args?: SelectSubset<T, VibeProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VibeProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VibeProfile.
     * @param {VibeProfileCreateArgs} args - Arguments to create a VibeProfile.
     * @example
     * // Create one VibeProfile
     * const VibeProfile = await prisma.vibeProfile.create({
     *   data: {
     *     // ... data to create a VibeProfile
     *   }
     * })
     * 
     */
    create<T extends VibeProfileCreateArgs>(args: SelectSubset<T, VibeProfileCreateArgs<ExtArgs>>): Prisma__VibeProfileClient<$Result.GetResult<Prisma.$VibeProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VibeProfiles.
     * @param {VibeProfileCreateManyArgs} args - Arguments to create many VibeProfiles.
     * @example
     * // Create many VibeProfiles
     * const vibeProfile = await prisma.vibeProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VibeProfileCreateManyArgs>(args?: SelectSubset<T, VibeProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VibeProfiles and returns the data saved in the database.
     * @param {VibeProfileCreateManyAndReturnArgs} args - Arguments to create many VibeProfiles.
     * @example
     * // Create many VibeProfiles
     * const vibeProfile = await prisma.vibeProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VibeProfiles and only return the `id`
     * const vibeProfileWithIdOnly = await prisma.vibeProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VibeProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, VibeProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VibeProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VibeProfile.
     * @param {VibeProfileDeleteArgs} args - Arguments to delete one VibeProfile.
     * @example
     * // Delete one VibeProfile
     * const VibeProfile = await prisma.vibeProfile.delete({
     *   where: {
     *     // ... filter to delete one VibeProfile
     *   }
     * })
     * 
     */
    delete<T extends VibeProfileDeleteArgs>(args: SelectSubset<T, VibeProfileDeleteArgs<ExtArgs>>): Prisma__VibeProfileClient<$Result.GetResult<Prisma.$VibeProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VibeProfile.
     * @param {VibeProfileUpdateArgs} args - Arguments to update one VibeProfile.
     * @example
     * // Update one VibeProfile
     * const vibeProfile = await prisma.vibeProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VibeProfileUpdateArgs>(args: SelectSubset<T, VibeProfileUpdateArgs<ExtArgs>>): Prisma__VibeProfileClient<$Result.GetResult<Prisma.$VibeProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VibeProfiles.
     * @param {VibeProfileDeleteManyArgs} args - Arguments to filter VibeProfiles to delete.
     * @example
     * // Delete a few VibeProfiles
     * const { count } = await prisma.vibeProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VibeProfileDeleteManyArgs>(args?: SelectSubset<T, VibeProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VibeProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VibeProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VibeProfiles
     * const vibeProfile = await prisma.vibeProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VibeProfileUpdateManyArgs>(args: SelectSubset<T, VibeProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VibeProfiles and returns the data updated in the database.
     * @param {VibeProfileUpdateManyAndReturnArgs} args - Arguments to update many VibeProfiles.
     * @example
     * // Update many VibeProfiles
     * const vibeProfile = await prisma.vibeProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VibeProfiles and only return the `id`
     * const vibeProfileWithIdOnly = await prisma.vibeProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VibeProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, VibeProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VibeProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VibeProfile.
     * @param {VibeProfileUpsertArgs} args - Arguments to update or create a VibeProfile.
     * @example
     * // Update or create a VibeProfile
     * const vibeProfile = await prisma.vibeProfile.upsert({
     *   create: {
     *     // ... data to create a VibeProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VibeProfile we want to update
     *   }
     * })
     */
    upsert<T extends VibeProfileUpsertArgs>(args: SelectSubset<T, VibeProfileUpsertArgs<ExtArgs>>): Prisma__VibeProfileClient<$Result.GetResult<Prisma.$VibeProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VibeProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VibeProfileCountArgs} args - Arguments to filter VibeProfiles to count.
     * @example
     * // Count the number of VibeProfiles
     * const count = await prisma.vibeProfile.count({
     *   where: {
     *     // ... the filter for the VibeProfiles we want to count
     *   }
     * })
    **/
    count<T extends VibeProfileCountArgs>(
      args?: Subset<T, VibeProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VibeProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VibeProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VibeProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VibeProfileAggregateArgs>(args: Subset<T, VibeProfileAggregateArgs>): Prisma.PrismaPromise<GetVibeProfileAggregateType<T>>

    /**
     * Group by VibeProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VibeProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VibeProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VibeProfileGroupByArgs['orderBy'] }
        : { orderBy?: VibeProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VibeProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVibeProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VibeProfile model
   */
  readonly fields: VibeProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VibeProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VibeProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VibeProfile model
   */
  interface VibeProfileFieldRefs {
    readonly id: FieldRef<"VibeProfile", 'String'>
    readonly userId: FieldRef<"VibeProfile", 'String'>
    readonly vibeProfile: FieldRef<"VibeProfile", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * VibeProfile findUnique
   */
  export type VibeProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VibeProfile
     */
    select?: VibeProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VibeProfile
     */
    omit?: VibeProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VibeProfileInclude<ExtArgs> | null
    /**
     * Filter, which VibeProfile to fetch.
     */
    where: VibeProfileWhereUniqueInput
  }

  /**
   * VibeProfile findUniqueOrThrow
   */
  export type VibeProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VibeProfile
     */
    select?: VibeProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VibeProfile
     */
    omit?: VibeProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VibeProfileInclude<ExtArgs> | null
    /**
     * Filter, which VibeProfile to fetch.
     */
    where: VibeProfileWhereUniqueInput
  }

  /**
   * VibeProfile findFirst
   */
  export type VibeProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VibeProfile
     */
    select?: VibeProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VibeProfile
     */
    omit?: VibeProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VibeProfileInclude<ExtArgs> | null
    /**
     * Filter, which VibeProfile to fetch.
     */
    where?: VibeProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VibeProfiles to fetch.
     */
    orderBy?: VibeProfileOrderByWithRelationInput | VibeProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VibeProfiles.
     */
    cursor?: VibeProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VibeProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VibeProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VibeProfiles.
     */
    distinct?: VibeProfileScalarFieldEnum | VibeProfileScalarFieldEnum[]
  }

  /**
   * VibeProfile findFirstOrThrow
   */
  export type VibeProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VibeProfile
     */
    select?: VibeProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VibeProfile
     */
    omit?: VibeProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VibeProfileInclude<ExtArgs> | null
    /**
     * Filter, which VibeProfile to fetch.
     */
    where?: VibeProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VibeProfiles to fetch.
     */
    orderBy?: VibeProfileOrderByWithRelationInput | VibeProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VibeProfiles.
     */
    cursor?: VibeProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VibeProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VibeProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VibeProfiles.
     */
    distinct?: VibeProfileScalarFieldEnum | VibeProfileScalarFieldEnum[]
  }

  /**
   * VibeProfile findMany
   */
  export type VibeProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VibeProfile
     */
    select?: VibeProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VibeProfile
     */
    omit?: VibeProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VibeProfileInclude<ExtArgs> | null
    /**
     * Filter, which VibeProfiles to fetch.
     */
    where?: VibeProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VibeProfiles to fetch.
     */
    orderBy?: VibeProfileOrderByWithRelationInput | VibeProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VibeProfiles.
     */
    cursor?: VibeProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VibeProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VibeProfiles.
     */
    skip?: number
    distinct?: VibeProfileScalarFieldEnum | VibeProfileScalarFieldEnum[]
  }

  /**
   * VibeProfile create
   */
  export type VibeProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VibeProfile
     */
    select?: VibeProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VibeProfile
     */
    omit?: VibeProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VibeProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a VibeProfile.
     */
    data: XOR<VibeProfileCreateInput, VibeProfileUncheckedCreateInput>
  }

  /**
   * VibeProfile createMany
   */
  export type VibeProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VibeProfiles.
     */
    data: VibeProfileCreateManyInput | VibeProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VibeProfile createManyAndReturn
   */
  export type VibeProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VibeProfile
     */
    select?: VibeProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VibeProfile
     */
    omit?: VibeProfileOmit<ExtArgs> | null
    /**
     * The data used to create many VibeProfiles.
     */
    data: VibeProfileCreateManyInput | VibeProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VibeProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VibeProfile update
   */
  export type VibeProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VibeProfile
     */
    select?: VibeProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VibeProfile
     */
    omit?: VibeProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VibeProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a VibeProfile.
     */
    data: XOR<VibeProfileUpdateInput, VibeProfileUncheckedUpdateInput>
    /**
     * Choose, which VibeProfile to update.
     */
    where: VibeProfileWhereUniqueInput
  }

  /**
   * VibeProfile updateMany
   */
  export type VibeProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VibeProfiles.
     */
    data: XOR<VibeProfileUpdateManyMutationInput, VibeProfileUncheckedUpdateManyInput>
    /**
     * Filter which VibeProfiles to update
     */
    where?: VibeProfileWhereInput
    /**
     * Limit how many VibeProfiles to update.
     */
    limit?: number
  }

  /**
   * VibeProfile updateManyAndReturn
   */
  export type VibeProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VibeProfile
     */
    select?: VibeProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VibeProfile
     */
    omit?: VibeProfileOmit<ExtArgs> | null
    /**
     * The data used to update VibeProfiles.
     */
    data: XOR<VibeProfileUpdateManyMutationInput, VibeProfileUncheckedUpdateManyInput>
    /**
     * Filter which VibeProfiles to update
     */
    where?: VibeProfileWhereInput
    /**
     * Limit how many VibeProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VibeProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VibeProfile upsert
   */
  export type VibeProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VibeProfile
     */
    select?: VibeProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VibeProfile
     */
    omit?: VibeProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VibeProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the VibeProfile to update in case it exists.
     */
    where: VibeProfileWhereUniqueInput
    /**
     * In case the VibeProfile found by the `where` argument doesn't exist, create a new VibeProfile with this data.
     */
    create: XOR<VibeProfileCreateInput, VibeProfileUncheckedCreateInput>
    /**
     * In case the VibeProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VibeProfileUpdateInput, VibeProfileUncheckedUpdateInput>
  }

  /**
   * VibeProfile delete
   */
  export type VibeProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VibeProfile
     */
    select?: VibeProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VibeProfile
     */
    omit?: VibeProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VibeProfileInclude<ExtArgs> | null
    /**
     * Filter which VibeProfile to delete.
     */
    where: VibeProfileWhereUniqueInput
  }

  /**
   * VibeProfile deleteMany
   */
  export type VibeProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VibeProfiles to delete
     */
    where?: VibeProfileWhereInput
    /**
     * Limit how many VibeProfiles to delete.
     */
    limit?: number
  }

  /**
   * VibeProfile without action
   */
  export type VibeProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VibeProfile
     */
    select?: VibeProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VibeProfile
     */
    omit?: VibeProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VibeProfileInclude<ExtArgs> | null
  }


  /**
   * Model ProblemGeneration
   */

  export type AggregateProblemGeneration = {
    _count: ProblemGenerationCountAggregateOutputType | null
    _avg: ProblemGenerationAvgAggregateOutputType | null
    _sum: ProblemGenerationSumAggregateOutputType | null
    _min: ProblemGenerationMinAggregateOutputType | null
    _max: ProblemGenerationMaxAggregateOutputType | null
  }

  export type ProblemGenerationAvgAggregateOutputType = {
    currentStep: number | null
  }

  export type ProblemGenerationSumAggregateOutputType = {
    currentStep: number | null
  }

  export type ProblemGenerationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    currentStep: number | null
    isCompleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    theme: string | null
    narrative: string | null
    technicalOutline: string | null
    solutionCode: string | null
    testGenerator: string | null
  }

  export type ProblemGenerationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    currentStep: number | null
    isCompleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    theme: string | null
    narrative: string | null
    technicalOutline: string | null
    solutionCode: string | null
    testGenerator: string | null
  }

  export type ProblemGenerationCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    currentStep: number
    isCompleted: number
    createdAt: number
    updatedAt: number
    theme: number
    vibeProfile: number
    selectedLogline: number
    narrative: number
    selectedAlgorithms: number
    problemProposal: number
    formalizedProblem: number
    technicalOutline: number
    solutionCode: number
    testGenerator: number
    _all: number
  }


  export type ProblemGenerationAvgAggregateInputType = {
    currentStep?: true
  }

  export type ProblemGenerationSumAggregateInputType = {
    currentStep?: true
  }

  export type ProblemGenerationMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    currentStep?: true
    isCompleted?: true
    createdAt?: true
    updatedAt?: true
    theme?: true
    narrative?: true
    technicalOutline?: true
    solutionCode?: true
    testGenerator?: true
  }

  export type ProblemGenerationMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    currentStep?: true
    isCompleted?: true
    createdAt?: true
    updatedAt?: true
    theme?: true
    narrative?: true
    technicalOutline?: true
    solutionCode?: true
    testGenerator?: true
  }

  export type ProblemGenerationCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    currentStep?: true
    isCompleted?: true
    createdAt?: true
    updatedAt?: true
    theme?: true
    vibeProfile?: true
    selectedLogline?: true
    narrative?: true
    selectedAlgorithms?: true
    problemProposal?: true
    formalizedProblem?: true
    technicalOutline?: true
    solutionCode?: true
    testGenerator?: true
    _all?: true
  }

  export type ProblemGenerationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProblemGeneration to aggregate.
     */
    where?: ProblemGenerationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemGenerations to fetch.
     */
    orderBy?: ProblemGenerationOrderByWithRelationInput | ProblemGenerationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProblemGenerationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemGenerations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemGenerations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProblemGenerations
    **/
    _count?: true | ProblemGenerationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProblemGenerationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProblemGenerationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProblemGenerationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProblemGenerationMaxAggregateInputType
  }

  export type GetProblemGenerationAggregateType<T extends ProblemGenerationAggregateArgs> = {
        [P in keyof T & keyof AggregateProblemGeneration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProblemGeneration[P]>
      : GetScalarType<T[P], AggregateProblemGeneration[P]>
  }




  export type ProblemGenerationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemGenerationWhereInput
    orderBy?: ProblemGenerationOrderByWithAggregationInput | ProblemGenerationOrderByWithAggregationInput[]
    by: ProblemGenerationScalarFieldEnum[] | ProblemGenerationScalarFieldEnum
    having?: ProblemGenerationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProblemGenerationCountAggregateInputType | true
    _avg?: ProblemGenerationAvgAggregateInputType
    _sum?: ProblemGenerationSumAggregateInputType
    _min?: ProblemGenerationMinAggregateInputType
    _max?: ProblemGenerationMaxAggregateInputType
  }

  export type ProblemGenerationGroupByOutputType = {
    id: string
    userId: string
    title: string
    currentStep: number
    isCompleted: boolean
    createdAt: Date
    updatedAt: Date
    theme: string | null
    vibeProfile: JsonValue | null
    selectedLogline: JsonValue | null
    narrative: string | null
    selectedAlgorithms: JsonValue | null
    problemProposal: JsonValue | null
    formalizedProblem: JsonValue | null
    technicalOutline: string | null
    solutionCode: string | null
    testGenerator: string | null
    _count: ProblemGenerationCountAggregateOutputType | null
    _avg: ProblemGenerationAvgAggregateOutputType | null
    _sum: ProblemGenerationSumAggregateOutputType | null
    _min: ProblemGenerationMinAggregateOutputType | null
    _max: ProblemGenerationMaxAggregateOutputType | null
  }

  type GetProblemGenerationGroupByPayload<T extends ProblemGenerationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProblemGenerationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProblemGenerationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProblemGenerationGroupByOutputType[P]>
            : GetScalarType<T[P], ProblemGenerationGroupByOutputType[P]>
        }
      >
    >


  export type ProblemGenerationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    currentStep?: boolean
    isCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    theme?: boolean
    vibeProfile?: boolean
    selectedLogline?: boolean
    narrative?: boolean
    selectedAlgorithms?: boolean
    problemProposal?: boolean
    formalizedProblem?: boolean
    technicalOutline?: boolean
    solutionCode?: boolean
    testGenerator?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemGeneration"]>

  export type ProblemGenerationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    currentStep?: boolean
    isCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    theme?: boolean
    vibeProfile?: boolean
    selectedLogline?: boolean
    narrative?: boolean
    selectedAlgorithms?: boolean
    problemProposal?: boolean
    formalizedProblem?: boolean
    technicalOutline?: boolean
    solutionCode?: boolean
    testGenerator?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemGeneration"]>

  export type ProblemGenerationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    currentStep?: boolean
    isCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    theme?: boolean
    vibeProfile?: boolean
    selectedLogline?: boolean
    narrative?: boolean
    selectedAlgorithms?: boolean
    problemProposal?: boolean
    formalizedProblem?: boolean
    technicalOutline?: boolean
    solutionCode?: boolean
    testGenerator?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemGeneration"]>

  export type ProblemGenerationSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    currentStep?: boolean
    isCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    theme?: boolean
    vibeProfile?: boolean
    selectedLogline?: boolean
    narrative?: boolean
    selectedAlgorithms?: boolean
    problemProposal?: boolean
    formalizedProblem?: boolean
    technicalOutline?: boolean
    solutionCode?: boolean
    testGenerator?: boolean
  }

  export type ProblemGenerationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "currentStep" | "isCompleted" | "createdAt" | "updatedAt" | "theme" | "vibeProfile" | "selectedLogline" | "narrative" | "selectedAlgorithms" | "problemProposal" | "formalizedProblem" | "technicalOutline" | "solutionCode" | "testGenerator", ExtArgs["result"]["problemGeneration"]>
  export type ProblemGenerationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProblemGenerationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProblemGenerationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProblemGenerationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProblemGeneration"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      currentStep: number
      isCompleted: boolean
      createdAt: Date
      updatedAt: Date
      theme: string | null
      vibeProfile: Prisma.JsonValue | null
      selectedLogline: Prisma.JsonValue | null
      narrative: string | null
      selectedAlgorithms: Prisma.JsonValue | null
      problemProposal: Prisma.JsonValue | null
      formalizedProblem: Prisma.JsonValue | null
      technicalOutline: string | null
      solutionCode: string | null
      testGenerator: string | null
    }, ExtArgs["result"]["problemGeneration"]>
    composites: {}
  }

  type ProblemGenerationGetPayload<S extends boolean | null | undefined | ProblemGenerationDefaultArgs> = $Result.GetResult<Prisma.$ProblemGenerationPayload, S>

  type ProblemGenerationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProblemGenerationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProblemGenerationCountAggregateInputType | true
    }

  export interface ProblemGenerationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProblemGeneration'], meta: { name: 'ProblemGeneration' } }
    /**
     * Find zero or one ProblemGeneration that matches the filter.
     * @param {ProblemGenerationFindUniqueArgs} args - Arguments to find a ProblemGeneration
     * @example
     * // Get one ProblemGeneration
     * const problemGeneration = await prisma.problemGeneration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProblemGenerationFindUniqueArgs>(args: SelectSubset<T, ProblemGenerationFindUniqueArgs<ExtArgs>>): Prisma__ProblemGenerationClient<$Result.GetResult<Prisma.$ProblemGenerationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProblemGeneration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProblemGenerationFindUniqueOrThrowArgs} args - Arguments to find a ProblemGeneration
     * @example
     * // Get one ProblemGeneration
     * const problemGeneration = await prisma.problemGeneration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProblemGenerationFindUniqueOrThrowArgs>(args: SelectSubset<T, ProblemGenerationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProblemGenerationClient<$Result.GetResult<Prisma.$ProblemGenerationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProblemGeneration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemGenerationFindFirstArgs} args - Arguments to find a ProblemGeneration
     * @example
     * // Get one ProblemGeneration
     * const problemGeneration = await prisma.problemGeneration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProblemGenerationFindFirstArgs>(args?: SelectSubset<T, ProblemGenerationFindFirstArgs<ExtArgs>>): Prisma__ProblemGenerationClient<$Result.GetResult<Prisma.$ProblemGenerationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProblemGeneration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemGenerationFindFirstOrThrowArgs} args - Arguments to find a ProblemGeneration
     * @example
     * // Get one ProblemGeneration
     * const problemGeneration = await prisma.problemGeneration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProblemGenerationFindFirstOrThrowArgs>(args?: SelectSubset<T, ProblemGenerationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProblemGenerationClient<$Result.GetResult<Prisma.$ProblemGenerationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProblemGenerations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemGenerationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProblemGenerations
     * const problemGenerations = await prisma.problemGeneration.findMany()
     * 
     * // Get first 10 ProblemGenerations
     * const problemGenerations = await prisma.problemGeneration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const problemGenerationWithIdOnly = await prisma.problemGeneration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProblemGenerationFindManyArgs>(args?: SelectSubset<T, ProblemGenerationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemGenerationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProblemGeneration.
     * @param {ProblemGenerationCreateArgs} args - Arguments to create a ProblemGeneration.
     * @example
     * // Create one ProblemGeneration
     * const ProblemGeneration = await prisma.problemGeneration.create({
     *   data: {
     *     // ... data to create a ProblemGeneration
     *   }
     * })
     * 
     */
    create<T extends ProblemGenerationCreateArgs>(args: SelectSubset<T, ProblemGenerationCreateArgs<ExtArgs>>): Prisma__ProblemGenerationClient<$Result.GetResult<Prisma.$ProblemGenerationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProblemGenerations.
     * @param {ProblemGenerationCreateManyArgs} args - Arguments to create many ProblemGenerations.
     * @example
     * // Create many ProblemGenerations
     * const problemGeneration = await prisma.problemGeneration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProblemGenerationCreateManyArgs>(args?: SelectSubset<T, ProblemGenerationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProblemGenerations and returns the data saved in the database.
     * @param {ProblemGenerationCreateManyAndReturnArgs} args - Arguments to create many ProblemGenerations.
     * @example
     * // Create many ProblemGenerations
     * const problemGeneration = await prisma.problemGeneration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProblemGenerations and only return the `id`
     * const problemGenerationWithIdOnly = await prisma.problemGeneration.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProblemGenerationCreateManyAndReturnArgs>(args?: SelectSubset<T, ProblemGenerationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemGenerationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProblemGeneration.
     * @param {ProblemGenerationDeleteArgs} args - Arguments to delete one ProblemGeneration.
     * @example
     * // Delete one ProblemGeneration
     * const ProblemGeneration = await prisma.problemGeneration.delete({
     *   where: {
     *     // ... filter to delete one ProblemGeneration
     *   }
     * })
     * 
     */
    delete<T extends ProblemGenerationDeleteArgs>(args: SelectSubset<T, ProblemGenerationDeleteArgs<ExtArgs>>): Prisma__ProblemGenerationClient<$Result.GetResult<Prisma.$ProblemGenerationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProblemGeneration.
     * @param {ProblemGenerationUpdateArgs} args - Arguments to update one ProblemGeneration.
     * @example
     * // Update one ProblemGeneration
     * const problemGeneration = await prisma.problemGeneration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProblemGenerationUpdateArgs>(args: SelectSubset<T, ProblemGenerationUpdateArgs<ExtArgs>>): Prisma__ProblemGenerationClient<$Result.GetResult<Prisma.$ProblemGenerationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProblemGenerations.
     * @param {ProblemGenerationDeleteManyArgs} args - Arguments to filter ProblemGenerations to delete.
     * @example
     * // Delete a few ProblemGenerations
     * const { count } = await prisma.problemGeneration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProblemGenerationDeleteManyArgs>(args?: SelectSubset<T, ProblemGenerationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProblemGenerations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemGenerationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProblemGenerations
     * const problemGeneration = await prisma.problemGeneration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProblemGenerationUpdateManyArgs>(args: SelectSubset<T, ProblemGenerationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProblemGenerations and returns the data updated in the database.
     * @param {ProblemGenerationUpdateManyAndReturnArgs} args - Arguments to update many ProblemGenerations.
     * @example
     * // Update many ProblemGenerations
     * const problemGeneration = await prisma.problemGeneration.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProblemGenerations and only return the `id`
     * const problemGenerationWithIdOnly = await prisma.problemGeneration.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProblemGenerationUpdateManyAndReturnArgs>(args: SelectSubset<T, ProblemGenerationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemGenerationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProblemGeneration.
     * @param {ProblemGenerationUpsertArgs} args - Arguments to update or create a ProblemGeneration.
     * @example
     * // Update or create a ProblemGeneration
     * const problemGeneration = await prisma.problemGeneration.upsert({
     *   create: {
     *     // ... data to create a ProblemGeneration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProblemGeneration we want to update
     *   }
     * })
     */
    upsert<T extends ProblemGenerationUpsertArgs>(args: SelectSubset<T, ProblemGenerationUpsertArgs<ExtArgs>>): Prisma__ProblemGenerationClient<$Result.GetResult<Prisma.$ProblemGenerationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProblemGenerations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemGenerationCountArgs} args - Arguments to filter ProblemGenerations to count.
     * @example
     * // Count the number of ProblemGenerations
     * const count = await prisma.problemGeneration.count({
     *   where: {
     *     // ... the filter for the ProblemGenerations we want to count
     *   }
     * })
    **/
    count<T extends ProblemGenerationCountArgs>(
      args?: Subset<T, ProblemGenerationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProblemGenerationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProblemGeneration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemGenerationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProblemGenerationAggregateArgs>(args: Subset<T, ProblemGenerationAggregateArgs>): Prisma.PrismaPromise<GetProblemGenerationAggregateType<T>>

    /**
     * Group by ProblemGeneration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemGenerationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProblemGenerationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProblemGenerationGroupByArgs['orderBy'] }
        : { orderBy?: ProblemGenerationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProblemGenerationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProblemGenerationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProblemGeneration model
   */
  readonly fields: ProblemGenerationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProblemGeneration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProblemGenerationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProblemGeneration model
   */
  interface ProblemGenerationFieldRefs {
    readonly id: FieldRef<"ProblemGeneration", 'String'>
    readonly userId: FieldRef<"ProblemGeneration", 'String'>
    readonly title: FieldRef<"ProblemGeneration", 'String'>
    readonly currentStep: FieldRef<"ProblemGeneration", 'Int'>
    readonly isCompleted: FieldRef<"ProblemGeneration", 'Boolean'>
    readonly createdAt: FieldRef<"ProblemGeneration", 'DateTime'>
    readonly updatedAt: FieldRef<"ProblemGeneration", 'DateTime'>
    readonly theme: FieldRef<"ProblemGeneration", 'String'>
    readonly vibeProfile: FieldRef<"ProblemGeneration", 'Json'>
    readonly selectedLogline: FieldRef<"ProblemGeneration", 'Json'>
    readonly narrative: FieldRef<"ProblemGeneration", 'String'>
    readonly selectedAlgorithms: FieldRef<"ProblemGeneration", 'Json'>
    readonly problemProposal: FieldRef<"ProblemGeneration", 'Json'>
    readonly formalizedProblem: FieldRef<"ProblemGeneration", 'Json'>
    readonly technicalOutline: FieldRef<"ProblemGeneration", 'String'>
    readonly solutionCode: FieldRef<"ProblemGeneration", 'String'>
    readonly testGenerator: FieldRef<"ProblemGeneration", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProblemGeneration findUnique
   */
  export type ProblemGenerationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemGeneration
     */
    select?: ProblemGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemGeneration
     */
    omit?: ProblemGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemGenerationInclude<ExtArgs> | null
    /**
     * Filter, which ProblemGeneration to fetch.
     */
    where: ProblemGenerationWhereUniqueInput
  }

  /**
   * ProblemGeneration findUniqueOrThrow
   */
  export type ProblemGenerationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemGeneration
     */
    select?: ProblemGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemGeneration
     */
    omit?: ProblemGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemGenerationInclude<ExtArgs> | null
    /**
     * Filter, which ProblemGeneration to fetch.
     */
    where: ProblemGenerationWhereUniqueInput
  }

  /**
   * ProblemGeneration findFirst
   */
  export type ProblemGenerationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemGeneration
     */
    select?: ProblemGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemGeneration
     */
    omit?: ProblemGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemGenerationInclude<ExtArgs> | null
    /**
     * Filter, which ProblemGeneration to fetch.
     */
    where?: ProblemGenerationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemGenerations to fetch.
     */
    orderBy?: ProblemGenerationOrderByWithRelationInput | ProblemGenerationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProblemGenerations.
     */
    cursor?: ProblemGenerationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemGenerations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemGenerations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProblemGenerations.
     */
    distinct?: ProblemGenerationScalarFieldEnum | ProblemGenerationScalarFieldEnum[]
  }

  /**
   * ProblemGeneration findFirstOrThrow
   */
  export type ProblemGenerationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemGeneration
     */
    select?: ProblemGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemGeneration
     */
    omit?: ProblemGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemGenerationInclude<ExtArgs> | null
    /**
     * Filter, which ProblemGeneration to fetch.
     */
    where?: ProblemGenerationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemGenerations to fetch.
     */
    orderBy?: ProblemGenerationOrderByWithRelationInput | ProblemGenerationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProblemGenerations.
     */
    cursor?: ProblemGenerationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemGenerations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemGenerations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProblemGenerations.
     */
    distinct?: ProblemGenerationScalarFieldEnum | ProblemGenerationScalarFieldEnum[]
  }

  /**
   * ProblemGeneration findMany
   */
  export type ProblemGenerationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemGeneration
     */
    select?: ProblemGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemGeneration
     */
    omit?: ProblemGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemGenerationInclude<ExtArgs> | null
    /**
     * Filter, which ProblemGenerations to fetch.
     */
    where?: ProblemGenerationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemGenerations to fetch.
     */
    orderBy?: ProblemGenerationOrderByWithRelationInput | ProblemGenerationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProblemGenerations.
     */
    cursor?: ProblemGenerationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemGenerations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemGenerations.
     */
    skip?: number
    distinct?: ProblemGenerationScalarFieldEnum | ProblemGenerationScalarFieldEnum[]
  }

  /**
   * ProblemGeneration create
   */
  export type ProblemGenerationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemGeneration
     */
    select?: ProblemGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemGeneration
     */
    omit?: ProblemGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemGenerationInclude<ExtArgs> | null
    /**
     * The data needed to create a ProblemGeneration.
     */
    data: XOR<ProblemGenerationCreateInput, ProblemGenerationUncheckedCreateInput>
  }

  /**
   * ProblemGeneration createMany
   */
  export type ProblemGenerationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProblemGenerations.
     */
    data: ProblemGenerationCreateManyInput | ProblemGenerationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProblemGeneration createManyAndReturn
   */
  export type ProblemGenerationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemGeneration
     */
    select?: ProblemGenerationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemGeneration
     */
    omit?: ProblemGenerationOmit<ExtArgs> | null
    /**
     * The data used to create many ProblemGenerations.
     */
    data: ProblemGenerationCreateManyInput | ProblemGenerationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemGenerationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProblemGeneration update
   */
  export type ProblemGenerationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemGeneration
     */
    select?: ProblemGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemGeneration
     */
    omit?: ProblemGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemGenerationInclude<ExtArgs> | null
    /**
     * The data needed to update a ProblemGeneration.
     */
    data: XOR<ProblemGenerationUpdateInput, ProblemGenerationUncheckedUpdateInput>
    /**
     * Choose, which ProblemGeneration to update.
     */
    where: ProblemGenerationWhereUniqueInput
  }

  /**
   * ProblemGeneration updateMany
   */
  export type ProblemGenerationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProblemGenerations.
     */
    data: XOR<ProblemGenerationUpdateManyMutationInput, ProblemGenerationUncheckedUpdateManyInput>
    /**
     * Filter which ProblemGenerations to update
     */
    where?: ProblemGenerationWhereInput
    /**
     * Limit how many ProblemGenerations to update.
     */
    limit?: number
  }

  /**
   * ProblemGeneration updateManyAndReturn
   */
  export type ProblemGenerationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemGeneration
     */
    select?: ProblemGenerationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemGeneration
     */
    omit?: ProblemGenerationOmit<ExtArgs> | null
    /**
     * The data used to update ProblemGenerations.
     */
    data: XOR<ProblemGenerationUpdateManyMutationInput, ProblemGenerationUncheckedUpdateManyInput>
    /**
     * Filter which ProblemGenerations to update
     */
    where?: ProblemGenerationWhereInput
    /**
     * Limit how many ProblemGenerations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemGenerationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProblemGeneration upsert
   */
  export type ProblemGenerationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemGeneration
     */
    select?: ProblemGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemGeneration
     */
    omit?: ProblemGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemGenerationInclude<ExtArgs> | null
    /**
     * The filter to search for the ProblemGeneration to update in case it exists.
     */
    where: ProblemGenerationWhereUniqueInput
    /**
     * In case the ProblemGeneration found by the `where` argument doesn't exist, create a new ProblemGeneration with this data.
     */
    create: XOR<ProblemGenerationCreateInput, ProblemGenerationUncheckedCreateInput>
    /**
     * In case the ProblemGeneration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProblemGenerationUpdateInput, ProblemGenerationUncheckedUpdateInput>
  }

  /**
   * ProblemGeneration delete
   */
  export type ProblemGenerationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemGeneration
     */
    select?: ProblemGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemGeneration
     */
    omit?: ProblemGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemGenerationInclude<ExtArgs> | null
    /**
     * Filter which ProblemGeneration to delete.
     */
    where: ProblemGenerationWhereUniqueInput
  }

  /**
   * ProblemGeneration deleteMany
   */
  export type ProblemGenerationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProblemGenerations to delete
     */
    where?: ProblemGenerationWhereInput
    /**
     * Limit how many ProblemGenerations to delete.
     */
    limit?: number
  }

  /**
   * ProblemGeneration without action
   */
  export type ProblemGenerationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemGeneration
     */
    select?: ProblemGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemGeneration
     */
    omit?: ProblemGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemGenerationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StarredLoglineScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    logline: 'logline'
  };

  export type StarredLoglineScalarFieldEnum = (typeof StarredLoglineScalarFieldEnum)[keyof typeof StarredLoglineScalarFieldEnum]


  export const StarredThemeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    theme: 'theme'
  };

  export type StarredThemeScalarFieldEnum = (typeof StarredThemeScalarFieldEnum)[keyof typeof StarredThemeScalarFieldEnum]


  export const VibeProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    vibeProfile: 'vibeProfile'
  };

  export type VibeProfileScalarFieldEnum = (typeof VibeProfileScalarFieldEnum)[keyof typeof VibeProfileScalarFieldEnum]


  export const ProblemGenerationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    currentStep: 'currentStep',
    isCompleted: 'isCompleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    theme: 'theme',
    vibeProfile: 'vibeProfile',
    selectedLogline: 'selectedLogline',
    narrative: 'narrative',
    selectedAlgorithms: 'selectedAlgorithms',
    problemProposal: 'problemProposal',
    formalizedProblem: 'formalizedProblem',
    technicalOutline: 'technicalOutline',
    solutionCode: 'solutionCode',
    testGenerator: 'testGenerator'
  };

  export type ProblemGenerationScalarFieldEnum = (typeof ProblemGenerationScalarFieldEnum)[keyof typeof ProblemGenerationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    problemGenerations?: ProblemGenerationListRelationFilter
    vibeProfiles?: VibeProfileListRelationFilter
    starredLoglines?: StarredLoglineListRelationFilter
    starredThemes?: StarredThemeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    problemGenerations?: ProblemGenerationOrderByRelationAggregateInput
    vibeProfiles?: VibeProfileOrderByRelationAggregateInput
    starredLoglines?: StarredLoglineOrderByRelationAggregateInput
    starredThemes?: StarredThemeOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    problemGenerations?: ProblemGenerationListRelationFilter
    vibeProfiles?: VibeProfileListRelationFilter
    starredLoglines?: StarredLoglineListRelationFilter
    starredThemes?: StarredThemeListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type StarredLoglineWhereInput = {
    AND?: StarredLoglineWhereInput | StarredLoglineWhereInput[]
    OR?: StarredLoglineWhereInput[]
    NOT?: StarredLoglineWhereInput | StarredLoglineWhereInput[]
    id?: StringFilter<"StarredLogline"> | string
    userId?: StringFilter<"StarredLogline"> | string
    logline?: JsonFilter<"StarredLogline">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type StarredLoglineOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    logline?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type StarredLoglineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StarredLoglineWhereInput | StarredLoglineWhereInput[]
    OR?: StarredLoglineWhereInput[]
    NOT?: StarredLoglineWhereInput | StarredLoglineWhereInput[]
    userId?: StringFilter<"StarredLogline"> | string
    logline?: JsonFilter<"StarredLogline">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type StarredLoglineOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    logline?: SortOrder
    _count?: StarredLoglineCountOrderByAggregateInput
    _max?: StarredLoglineMaxOrderByAggregateInput
    _min?: StarredLoglineMinOrderByAggregateInput
  }

  export type StarredLoglineScalarWhereWithAggregatesInput = {
    AND?: StarredLoglineScalarWhereWithAggregatesInput | StarredLoglineScalarWhereWithAggregatesInput[]
    OR?: StarredLoglineScalarWhereWithAggregatesInput[]
    NOT?: StarredLoglineScalarWhereWithAggregatesInput | StarredLoglineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StarredLogline"> | string
    userId?: StringWithAggregatesFilter<"StarredLogline"> | string
    logline?: JsonWithAggregatesFilter<"StarredLogline">
  }

  export type StarredThemeWhereInput = {
    AND?: StarredThemeWhereInput | StarredThemeWhereInput[]
    OR?: StarredThemeWhereInput[]
    NOT?: StarredThemeWhereInput | StarredThemeWhereInput[]
    id?: StringFilter<"StarredTheme"> | string
    userId?: StringFilter<"StarredTheme"> | string
    theme?: StringFilter<"StarredTheme"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type StarredThemeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    theme?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type StarredThemeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StarredThemeWhereInput | StarredThemeWhereInput[]
    OR?: StarredThemeWhereInput[]
    NOT?: StarredThemeWhereInput | StarredThemeWhereInput[]
    userId?: StringFilter<"StarredTheme"> | string
    theme?: StringFilter<"StarredTheme"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type StarredThemeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    theme?: SortOrder
    _count?: StarredThemeCountOrderByAggregateInput
    _max?: StarredThemeMaxOrderByAggregateInput
    _min?: StarredThemeMinOrderByAggregateInput
  }

  export type StarredThemeScalarWhereWithAggregatesInput = {
    AND?: StarredThemeScalarWhereWithAggregatesInput | StarredThemeScalarWhereWithAggregatesInput[]
    OR?: StarredThemeScalarWhereWithAggregatesInput[]
    NOT?: StarredThemeScalarWhereWithAggregatesInput | StarredThemeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StarredTheme"> | string
    userId?: StringWithAggregatesFilter<"StarredTheme"> | string
    theme?: StringWithAggregatesFilter<"StarredTheme"> | string
  }

  export type VibeProfileWhereInput = {
    AND?: VibeProfileWhereInput | VibeProfileWhereInput[]
    OR?: VibeProfileWhereInput[]
    NOT?: VibeProfileWhereInput | VibeProfileWhereInput[]
    id?: StringFilter<"VibeProfile"> | string
    userId?: StringFilter<"VibeProfile"> | string
    vibeProfile?: JsonFilter<"VibeProfile">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type VibeProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    vibeProfile?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type VibeProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VibeProfileWhereInput | VibeProfileWhereInput[]
    OR?: VibeProfileWhereInput[]
    NOT?: VibeProfileWhereInput | VibeProfileWhereInput[]
    userId?: StringFilter<"VibeProfile"> | string
    vibeProfile?: JsonFilter<"VibeProfile">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type VibeProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    vibeProfile?: SortOrder
    _count?: VibeProfileCountOrderByAggregateInput
    _max?: VibeProfileMaxOrderByAggregateInput
    _min?: VibeProfileMinOrderByAggregateInput
  }

  export type VibeProfileScalarWhereWithAggregatesInput = {
    AND?: VibeProfileScalarWhereWithAggregatesInput | VibeProfileScalarWhereWithAggregatesInput[]
    OR?: VibeProfileScalarWhereWithAggregatesInput[]
    NOT?: VibeProfileScalarWhereWithAggregatesInput | VibeProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VibeProfile"> | string
    userId?: StringWithAggregatesFilter<"VibeProfile"> | string
    vibeProfile?: JsonWithAggregatesFilter<"VibeProfile">
  }

  export type ProblemGenerationWhereInput = {
    AND?: ProblemGenerationWhereInput | ProblemGenerationWhereInput[]
    OR?: ProblemGenerationWhereInput[]
    NOT?: ProblemGenerationWhereInput | ProblemGenerationWhereInput[]
    id?: StringFilter<"ProblemGeneration"> | string
    userId?: StringFilter<"ProblemGeneration"> | string
    title?: StringFilter<"ProblemGeneration"> | string
    currentStep?: IntFilter<"ProblemGeneration"> | number
    isCompleted?: BoolFilter<"ProblemGeneration"> | boolean
    createdAt?: DateTimeFilter<"ProblemGeneration"> | Date | string
    updatedAt?: DateTimeFilter<"ProblemGeneration"> | Date | string
    theme?: StringNullableFilter<"ProblemGeneration"> | string | null
    vibeProfile?: JsonNullableFilter<"ProblemGeneration">
    selectedLogline?: JsonNullableFilter<"ProblemGeneration">
    narrative?: StringNullableFilter<"ProblemGeneration"> | string | null
    selectedAlgorithms?: JsonNullableFilter<"ProblemGeneration">
    problemProposal?: JsonNullableFilter<"ProblemGeneration">
    formalizedProblem?: JsonNullableFilter<"ProblemGeneration">
    technicalOutline?: StringNullableFilter<"ProblemGeneration"> | string | null
    solutionCode?: StringNullableFilter<"ProblemGeneration"> | string | null
    testGenerator?: StringNullableFilter<"ProblemGeneration"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProblemGenerationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    currentStep?: SortOrder
    isCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    theme?: SortOrderInput | SortOrder
    vibeProfile?: SortOrderInput | SortOrder
    selectedLogline?: SortOrderInput | SortOrder
    narrative?: SortOrderInput | SortOrder
    selectedAlgorithms?: SortOrderInput | SortOrder
    problemProposal?: SortOrderInput | SortOrder
    formalizedProblem?: SortOrderInput | SortOrder
    technicalOutline?: SortOrderInput | SortOrder
    solutionCode?: SortOrderInput | SortOrder
    testGenerator?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ProblemGenerationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProblemGenerationWhereInput | ProblemGenerationWhereInput[]
    OR?: ProblemGenerationWhereInput[]
    NOT?: ProblemGenerationWhereInput | ProblemGenerationWhereInput[]
    userId?: StringFilter<"ProblemGeneration"> | string
    title?: StringFilter<"ProblemGeneration"> | string
    currentStep?: IntFilter<"ProblemGeneration"> | number
    isCompleted?: BoolFilter<"ProblemGeneration"> | boolean
    createdAt?: DateTimeFilter<"ProblemGeneration"> | Date | string
    updatedAt?: DateTimeFilter<"ProblemGeneration"> | Date | string
    theme?: StringNullableFilter<"ProblemGeneration"> | string | null
    vibeProfile?: JsonNullableFilter<"ProblemGeneration">
    selectedLogline?: JsonNullableFilter<"ProblemGeneration">
    narrative?: StringNullableFilter<"ProblemGeneration"> | string | null
    selectedAlgorithms?: JsonNullableFilter<"ProblemGeneration">
    problemProposal?: JsonNullableFilter<"ProblemGeneration">
    formalizedProblem?: JsonNullableFilter<"ProblemGeneration">
    technicalOutline?: StringNullableFilter<"ProblemGeneration"> | string | null
    solutionCode?: StringNullableFilter<"ProblemGeneration"> | string | null
    testGenerator?: StringNullableFilter<"ProblemGeneration"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ProblemGenerationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    currentStep?: SortOrder
    isCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    theme?: SortOrderInput | SortOrder
    vibeProfile?: SortOrderInput | SortOrder
    selectedLogline?: SortOrderInput | SortOrder
    narrative?: SortOrderInput | SortOrder
    selectedAlgorithms?: SortOrderInput | SortOrder
    problemProposal?: SortOrderInput | SortOrder
    formalizedProblem?: SortOrderInput | SortOrder
    technicalOutline?: SortOrderInput | SortOrder
    solutionCode?: SortOrderInput | SortOrder
    testGenerator?: SortOrderInput | SortOrder
    _count?: ProblemGenerationCountOrderByAggregateInput
    _avg?: ProblemGenerationAvgOrderByAggregateInput
    _max?: ProblemGenerationMaxOrderByAggregateInput
    _min?: ProblemGenerationMinOrderByAggregateInput
    _sum?: ProblemGenerationSumOrderByAggregateInput
  }

  export type ProblemGenerationScalarWhereWithAggregatesInput = {
    AND?: ProblemGenerationScalarWhereWithAggregatesInput | ProblemGenerationScalarWhereWithAggregatesInput[]
    OR?: ProblemGenerationScalarWhereWithAggregatesInput[]
    NOT?: ProblemGenerationScalarWhereWithAggregatesInput | ProblemGenerationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProblemGeneration"> | string
    userId?: StringWithAggregatesFilter<"ProblemGeneration"> | string
    title?: StringWithAggregatesFilter<"ProblemGeneration"> | string
    currentStep?: IntWithAggregatesFilter<"ProblemGeneration"> | number
    isCompleted?: BoolWithAggregatesFilter<"ProblemGeneration"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ProblemGeneration"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProblemGeneration"> | Date | string
    theme?: StringNullableWithAggregatesFilter<"ProblemGeneration"> | string | null
    vibeProfile?: JsonNullableWithAggregatesFilter<"ProblemGeneration">
    selectedLogline?: JsonNullableWithAggregatesFilter<"ProblemGeneration">
    narrative?: StringNullableWithAggregatesFilter<"ProblemGeneration"> | string | null
    selectedAlgorithms?: JsonNullableWithAggregatesFilter<"ProblemGeneration">
    problemProposal?: JsonNullableWithAggregatesFilter<"ProblemGeneration">
    formalizedProblem?: JsonNullableWithAggregatesFilter<"ProblemGeneration">
    technicalOutline?: StringNullableWithAggregatesFilter<"ProblemGeneration"> | string | null
    solutionCode?: StringNullableWithAggregatesFilter<"ProblemGeneration"> | string | null
    testGenerator?: StringNullableWithAggregatesFilter<"ProblemGeneration"> | string | null
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    problemGenerations?: ProblemGenerationCreateNestedManyWithoutUserInput
    vibeProfiles?: VibeProfileCreateNestedManyWithoutUserInput
    starredLoglines?: StarredLoglineCreateNestedManyWithoutUserInput
    starredThemes?: StarredThemeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    problemGenerations?: ProblemGenerationUncheckedCreateNestedManyWithoutUserInput
    vibeProfiles?: VibeProfileUncheckedCreateNestedManyWithoutUserInput
    starredLoglines?: StarredLoglineUncheckedCreateNestedManyWithoutUserInput
    starredThemes?: StarredThemeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    problemGenerations?: ProblemGenerationUpdateManyWithoutUserNestedInput
    vibeProfiles?: VibeProfileUpdateManyWithoutUserNestedInput
    starredLoglines?: StarredLoglineUpdateManyWithoutUserNestedInput
    starredThemes?: StarredThemeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    problemGenerations?: ProblemGenerationUncheckedUpdateManyWithoutUserNestedInput
    vibeProfiles?: VibeProfileUncheckedUpdateManyWithoutUserNestedInput
    starredLoglines?: StarredLoglineUncheckedUpdateManyWithoutUserNestedInput
    starredThemes?: StarredThemeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StarredLoglineCreateInput = {
    id?: string
    logline: JsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutStarredLoglinesInput
  }

  export type StarredLoglineUncheckedCreateInput = {
    id?: string
    userId: string
    logline: JsonNullValueInput | InputJsonValue
  }

  export type StarredLoglineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    logline?: JsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutStarredLoglinesNestedInput
  }

  export type StarredLoglineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    logline?: JsonNullValueInput | InputJsonValue
  }

  export type StarredLoglineCreateManyInput = {
    id?: string
    userId: string
    logline: JsonNullValueInput | InputJsonValue
  }

  export type StarredLoglineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    logline?: JsonNullValueInput | InputJsonValue
  }

  export type StarredLoglineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    logline?: JsonNullValueInput | InputJsonValue
  }

  export type StarredThemeCreateInput = {
    id?: string
    theme: string
    user: UserCreateNestedOneWithoutStarredThemesInput
  }

  export type StarredThemeUncheckedCreateInput = {
    id?: string
    userId: string
    theme: string
  }

  export type StarredThemeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutStarredThemesNestedInput
  }

  export type StarredThemeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
  }

  export type StarredThemeCreateManyInput = {
    id?: string
    userId: string
    theme: string
  }

  export type StarredThemeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
  }

  export type StarredThemeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
  }

  export type VibeProfileCreateInput = {
    id?: string
    vibeProfile: JsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutVibeProfilesInput
  }

  export type VibeProfileUncheckedCreateInput = {
    id?: string
    userId: string
    vibeProfile: JsonNullValueInput | InputJsonValue
  }

  export type VibeProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vibeProfile?: JsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutVibeProfilesNestedInput
  }

  export type VibeProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    vibeProfile?: JsonNullValueInput | InputJsonValue
  }

  export type VibeProfileCreateManyInput = {
    id?: string
    userId: string
    vibeProfile: JsonNullValueInput | InputJsonValue
  }

  export type VibeProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    vibeProfile?: JsonNullValueInput | InputJsonValue
  }

  export type VibeProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    vibeProfile?: JsonNullValueInput | InputJsonValue
  }

  export type ProblemGenerationCreateInput = {
    id?: string
    title?: string
    currentStep?: number
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    theme?: string | null
    vibeProfile?: NullableJsonNullValueInput | InputJsonValue
    selectedLogline?: NullableJsonNullValueInput | InputJsonValue
    narrative?: string | null
    selectedAlgorithms?: NullableJsonNullValueInput | InputJsonValue
    problemProposal?: NullableJsonNullValueInput | InputJsonValue
    formalizedProblem?: NullableJsonNullValueInput | InputJsonValue
    technicalOutline?: string | null
    solutionCode?: string | null
    testGenerator?: string | null
    user: UserCreateNestedOneWithoutProblemGenerationsInput
  }

  export type ProblemGenerationUncheckedCreateInput = {
    id?: string
    userId: string
    title?: string
    currentStep?: number
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    theme?: string | null
    vibeProfile?: NullableJsonNullValueInput | InputJsonValue
    selectedLogline?: NullableJsonNullValueInput | InputJsonValue
    narrative?: string | null
    selectedAlgorithms?: NullableJsonNullValueInput | InputJsonValue
    problemProposal?: NullableJsonNullValueInput | InputJsonValue
    formalizedProblem?: NullableJsonNullValueInput | InputJsonValue
    technicalOutline?: string | null
    solutionCode?: string | null
    testGenerator?: string | null
  }

  export type ProblemGenerationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    currentStep?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    vibeProfile?: NullableJsonNullValueInput | InputJsonValue
    selectedLogline?: NullableJsonNullValueInput | InputJsonValue
    narrative?: NullableStringFieldUpdateOperationsInput | string | null
    selectedAlgorithms?: NullableJsonNullValueInput | InputJsonValue
    problemProposal?: NullableJsonNullValueInput | InputJsonValue
    formalizedProblem?: NullableJsonNullValueInput | InputJsonValue
    technicalOutline?: NullableStringFieldUpdateOperationsInput | string | null
    solutionCode?: NullableStringFieldUpdateOperationsInput | string | null
    testGenerator?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutProblemGenerationsNestedInput
  }

  export type ProblemGenerationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    currentStep?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    vibeProfile?: NullableJsonNullValueInput | InputJsonValue
    selectedLogline?: NullableJsonNullValueInput | InputJsonValue
    narrative?: NullableStringFieldUpdateOperationsInput | string | null
    selectedAlgorithms?: NullableJsonNullValueInput | InputJsonValue
    problemProposal?: NullableJsonNullValueInput | InputJsonValue
    formalizedProblem?: NullableJsonNullValueInput | InputJsonValue
    technicalOutline?: NullableStringFieldUpdateOperationsInput | string | null
    solutionCode?: NullableStringFieldUpdateOperationsInput | string | null
    testGenerator?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProblemGenerationCreateManyInput = {
    id?: string
    userId: string
    title?: string
    currentStep?: number
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    theme?: string | null
    vibeProfile?: NullableJsonNullValueInput | InputJsonValue
    selectedLogline?: NullableJsonNullValueInput | InputJsonValue
    narrative?: string | null
    selectedAlgorithms?: NullableJsonNullValueInput | InputJsonValue
    problemProposal?: NullableJsonNullValueInput | InputJsonValue
    formalizedProblem?: NullableJsonNullValueInput | InputJsonValue
    technicalOutline?: string | null
    solutionCode?: string | null
    testGenerator?: string | null
  }

  export type ProblemGenerationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    currentStep?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    vibeProfile?: NullableJsonNullValueInput | InputJsonValue
    selectedLogline?: NullableJsonNullValueInput | InputJsonValue
    narrative?: NullableStringFieldUpdateOperationsInput | string | null
    selectedAlgorithms?: NullableJsonNullValueInput | InputJsonValue
    problemProposal?: NullableJsonNullValueInput | InputJsonValue
    formalizedProblem?: NullableJsonNullValueInput | InputJsonValue
    technicalOutline?: NullableStringFieldUpdateOperationsInput | string | null
    solutionCode?: NullableStringFieldUpdateOperationsInput | string | null
    testGenerator?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProblemGenerationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    currentStep?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    vibeProfile?: NullableJsonNullValueInput | InputJsonValue
    selectedLogline?: NullableJsonNullValueInput | InputJsonValue
    narrative?: NullableStringFieldUpdateOperationsInput | string | null
    selectedAlgorithms?: NullableJsonNullValueInput | InputJsonValue
    problemProposal?: NullableJsonNullValueInput | InputJsonValue
    formalizedProblem?: NullableJsonNullValueInput | InputJsonValue
    technicalOutline?: NullableStringFieldUpdateOperationsInput | string | null
    solutionCode?: NullableStringFieldUpdateOperationsInput | string | null
    testGenerator?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type ProblemGenerationListRelationFilter = {
    every?: ProblemGenerationWhereInput
    some?: ProblemGenerationWhereInput
    none?: ProblemGenerationWhereInput
  }

  export type VibeProfileListRelationFilter = {
    every?: VibeProfileWhereInput
    some?: VibeProfileWhereInput
    none?: VibeProfileWhereInput
  }

  export type StarredLoglineListRelationFilter = {
    every?: StarredLoglineWhereInput
    some?: StarredLoglineWhereInput
    none?: StarredLoglineWhereInput
  }

  export type StarredThemeListRelationFilter = {
    every?: StarredThemeWhereInput
    some?: StarredThemeWhereInput
    none?: StarredThemeWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProblemGenerationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VibeProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StarredLoglineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StarredThemeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type StarredLoglineCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    logline?: SortOrder
  }

  export type StarredLoglineMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type StarredLoglineMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type StarredThemeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    theme?: SortOrder
  }

  export type StarredThemeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    theme?: SortOrder
  }

  export type StarredThemeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    theme?: SortOrder
  }

  export type VibeProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    vibeProfile?: SortOrder
  }

  export type VibeProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type VibeProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ProblemGenerationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    currentStep?: SortOrder
    isCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    theme?: SortOrder
    vibeProfile?: SortOrder
    selectedLogline?: SortOrder
    narrative?: SortOrder
    selectedAlgorithms?: SortOrder
    problemProposal?: SortOrder
    formalizedProblem?: SortOrder
    technicalOutline?: SortOrder
    solutionCode?: SortOrder
    testGenerator?: SortOrder
  }

  export type ProblemGenerationAvgOrderByAggregateInput = {
    currentStep?: SortOrder
  }

  export type ProblemGenerationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    currentStep?: SortOrder
    isCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    theme?: SortOrder
    narrative?: SortOrder
    technicalOutline?: SortOrder
    solutionCode?: SortOrder
    testGenerator?: SortOrder
  }

  export type ProblemGenerationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    currentStep?: SortOrder
    isCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    theme?: SortOrder
    narrative?: SortOrder
    technicalOutline?: SortOrder
    solutionCode?: SortOrder
    testGenerator?: SortOrder
  }

  export type ProblemGenerationSumOrderByAggregateInput = {
    currentStep?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ProblemGenerationCreateNestedManyWithoutUserInput = {
    create?: XOR<ProblemGenerationCreateWithoutUserInput, ProblemGenerationUncheckedCreateWithoutUserInput> | ProblemGenerationCreateWithoutUserInput[] | ProblemGenerationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemGenerationCreateOrConnectWithoutUserInput | ProblemGenerationCreateOrConnectWithoutUserInput[]
    createMany?: ProblemGenerationCreateManyUserInputEnvelope
    connect?: ProblemGenerationWhereUniqueInput | ProblemGenerationWhereUniqueInput[]
  }

  export type VibeProfileCreateNestedManyWithoutUserInput = {
    create?: XOR<VibeProfileCreateWithoutUserInput, VibeProfileUncheckedCreateWithoutUserInput> | VibeProfileCreateWithoutUserInput[] | VibeProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VibeProfileCreateOrConnectWithoutUserInput | VibeProfileCreateOrConnectWithoutUserInput[]
    createMany?: VibeProfileCreateManyUserInputEnvelope
    connect?: VibeProfileWhereUniqueInput | VibeProfileWhereUniqueInput[]
  }

  export type StarredLoglineCreateNestedManyWithoutUserInput = {
    create?: XOR<StarredLoglineCreateWithoutUserInput, StarredLoglineUncheckedCreateWithoutUserInput> | StarredLoglineCreateWithoutUserInput[] | StarredLoglineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StarredLoglineCreateOrConnectWithoutUserInput | StarredLoglineCreateOrConnectWithoutUserInput[]
    createMany?: StarredLoglineCreateManyUserInputEnvelope
    connect?: StarredLoglineWhereUniqueInput | StarredLoglineWhereUniqueInput[]
  }

  export type StarredThemeCreateNestedManyWithoutUserInput = {
    create?: XOR<StarredThemeCreateWithoutUserInput, StarredThemeUncheckedCreateWithoutUserInput> | StarredThemeCreateWithoutUserInput[] | StarredThemeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StarredThemeCreateOrConnectWithoutUserInput | StarredThemeCreateOrConnectWithoutUserInput[]
    createMany?: StarredThemeCreateManyUserInputEnvelope
    connect?: StarredThemeWhereUniqueInput | StarredThemeWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ProblemGenerationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProblemGenerationCreateWithoutUserInput, ProblemGenerationUncheckedCreateWithoutUserInput> | ProblemGenerationCreateWithoutUserInput[] | ProblemGenerationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemGenerationCreateOrConnectWithoutUserInput | ProblemGenerationCreateOrConnectWithoutUserInput[]
    createMany?: ProblemGenerationCreateManyUserInputEnvelope
    connect?: ProblemGenerationWhereUniqueInput | ProblemGenerationWhereUniqueInput[]
  }

  export type VibeProfileUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VibeProfileCreateWithoutUserInput, VibeProfileUncheckedCreateWithoutUserInput> | VibeProfileCreateWithoutUserInput[] | VibeProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VibeProfileCreateOrConnectWithoutUserInput | VibeProfileCreateOrConnectWithoutUserInput[]
    createMany?: VibeProfileCreateManyUserInputEnvelope
    connect?: VibeProfileWhereUniqueInput | VibeProfileWhereUniqueInput[]
  }

  export type StarredLoglineUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StarredLoglineCreateWithoutUserInput, StarredLoglineUncheckedCreateWithoutUserInput> | StarredLoglineCreateWithoutUserInput[] | StarredLoglineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StarredLoglineCreateOrConnectWithoutUserInput | StarredLoglineCreateOrConnectWithoutUserInput[]
    createMany?: StarredLoglineCreateManyUserInputEnvelope
    connect?: StarredLoglineWhereUniqueInput | StarredLoglineWhereUniqueInput[]
  }

  export type StarredThemeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StarredThemeCreateWithoutUserInput, StarredThemeUncheckedCreateWithoutUserInput> | StarredThemeCreateWithoutUserInput[] | StarredThemeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StarredThemeCreateOrConnectWithoutUserInput | StarredThemeCreateOrConnectWithoutUserInput[]
    createMany?: StarredThemeCreateManyUserInputEnvelope
    connect?: StarredThemeWhereUniqueInput | StarredThemeWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ProblemGenerationUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProblemGenerationCreateWithoutUserInput, ProblemGenerationUncheckedCreateWithoutUserInput> | ProblemGenerationCreateWithoutUserInput[] | ProblemGenerationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemGenerationCreateOrConnectWithoutUserInput | ProblemGenerationCreateOrConnectWithoutUserInput[]
    upsert?: ProblemGenerationUpsertWithWhereUniqueWithoutUserInput | ProblemGenerationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProblemGenerationCreateManyUserInputEnvelope
    set?: ProblemGenerationWhereUniqueInput | ProblemGenerationWhereUniqueInput[]
    disconnect?: ProblemGenerationWhereUniqueInput | ProblemGenerationWhereUniqueInput[]
    delete?: ProblemGenerationWhereUniqueInput | ProblemGenerationWhereUniqueInput[]
    connect?: ProblemGenerationWhereUniqueInput | ProblemGenerationWhereUniqueInput[]
    update?: ProblemGenerationUpdateWithWhereUniqueWithoutUserInput | ProblemGenerationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProblemGenerationUpdateManyWithWhereWithoutUserInput | ProblemGenerationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProblemGenerationScalarWhereInput | ProblemGenerationScalarWhereInput[]
  }

  export type VibeProfileUpdateManyWithoutUserNestedInput = {
    create?: XOR<VibeProfileCreateWithoutUserInput, VibeProfileUncheckedCreateWithoutUserInput> | VibeProfileCreateWithoutUserInput[] | VibeProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VibeProfileCreateOrConnectWithoutUserInput | VibeProfileCreateOrConnectWithoutUserInput[]
    upsert?: VibeProfileUpsertWithWhereUniqueWithoutUserInput | VibeProfileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VibeProfileCreateManyUserInputEnvelope
    set?: VibeProfileWhereUniqueInput | VibeProfileWhereUniqueInput[]
    disconnect?: VibeProfileWhereUniqueInput | VibeProfileWhereUniqueInput[]
    delete?: VibeProfileWhereUniqueInput | VibeProfileWhereUniqueInput[]
    connect?: VibeProfileWhereUniqueInput | VibeProfileWhereUniqueInput[]
    update?: VibeProfileUpdateWithWhereUniqueWithoutUserInput | VibeProfileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VibeProfileUpdateManyWithWhereWithoutUserInput | VibeProfileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VibeProfileScalarWhereInput | VibeProfileScalarWhereInput[]
  }

  export type StarredLoglineUpdateManyWithoutUserNestedInput = {
    create?: XOR<StarredLoglineCreateWithoutUserInput, StarredLoglineUncheckedCreateWithoutUserInput> | StarredLoglineCreateWithoutUserInput[] | StarredLoglineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StarredLoglineCreateOrConnectWithoutUserInput | StarredLoglineCreateOrConnectWithoutUserInput[]
    upsert?: StarredLoglineUpsertWithWhereUniqueWithoutUserInput | StarredLoglineUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StarredLoglineCreateManyUserInputEnvelope
    set?: StarredLoglineWhereUniqueInput | StarredLoglineWhereUniqueInput[]
    disconnect?: StarredLoglineWhereUniqueInput | StarredLoglineWhereUniqueInput[]
    delete?: StarredLoglineWhereUniqueInput | StarredLoglineWhereUniqueInput[]
    connect?: StarredLoglineWhereUniqueInput | StarredLoglineWhereUniqueInput[]
    update?: StarredLoglineUpdateWithWhereUniqueWithoutUserInput | StarredLoglineUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StarredLoglineUpdateManyWithWhereWithoutUserInput | StarredLoglineUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StarredLoglineScalarWhereInput | StarredLoglineScalarWhereInput[]
  }

  export type StarredThemeUpdateManyWithoutUserNestedInput = {
    create?: XOR<StarredThemeCreateWithoutUserInput, StarredThemeUncheckedCreateWithoutUserInput> | StarredThemeCreateWithoutUserInput[] | StarredThemeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StarredThemeCreateOrConnectWithoutUserInput | StarredThemeCreateOrConnectWithoutUserInput[]
    upsert?: StarredThemeUpsertWithWhereUniqueWithoutUserInput | StarredThemeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StarredThemeCreateManyUserInputEnvelope
    set?: StarredThemeWhereUniqueInput | StarredThemeWhereUniqueInput[]
    disconnect?: StarredThemeWhereUniqueInput | StarredThemeWhereUniqueInput[]
    delete?: StarredThemeWhereUniqueInput | StarredThemeWhereUniqueInput[]
    connect?: StarredThemeWhereUniqueInput | StarredThemeWhereUniqueInput[]
    update?: StarredThemeUpdateWithWhereUniqueWithoutUserInput | StarredThemeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StarredThemeUpdateManyWithWhereWithoutUserInput | StarredThemeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StarredThemeScalarWhereInput | StarredThemeScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ProblemGenerationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProblemGenerationCreateWithoutUserInput, ProblemGenerationUncheckedCreateWithoutUserInput> | ProblemGenerationCreateWithoutUserInput[] | ProblemGenerationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemGenerationCreateOrConnectWithoutUserInput | ProblemGenerationCreateOrConnectWithoutUserInput[]
    upsert?: ProblemGenerationUpsertWithWhereUniqueWithoutUserInput | ProblemGenerationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProblemGenerationCreateManyUserInputEnvelope
    set?: ProblemGenerationWhereUniqueInput | ProblemGenerationWhereUniqueInput[]
    disconnect?: ProblemGenerationWhereUniqueInput | ProblemGenerationWhereUniqueInput[]
    delete?: ProblemGenerationWhereUniqueInput | ProblemGenerationWhereUniqueInput[]
    connect?: ProblemGenerationWhereUniqueInput | ProblemGenerationWhereUniqueInput[]
    update?: ProblemGenerationUpdateWithWhereUniqueWithoutUserInput | ProblemGenerationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProblemGenerationUpdateManyWithWhereWithoutUserInput | ProblemGenerationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProblemGenerationScalarWhereInput | ProblemGenerationScalarWhereInput[]
  }

  export type VibeProfileUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VibeProfileCreateWithoutUserInput, VibeProfileUncheckedCreateWithoutUserInput> | VibeProfileCreateWithoutUserInput[] | VibeProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VibeProfileCreateOrConnectWithoutUserInput | VibeProfileCreateOrConnectWithoutUserInput[]
    upsert?: VibeProfileUpsertWithWhereUniqueWithoutUserInput | VibeProfileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VibeProfileCreateManyUserInputEnvelope
    set?: VibeProfileWhereUniqueInput | VibeProfileWhereUniqueInput[]
    disconnect?: VibeProfileWhereUniqueInput | VibeProfileWhereUniqueInput[]
    delete?: VibeProfileWhereUniqueInput | VibeProfileWhereUniqueInput[]
    connect?: VibeProfileWhereUniqueInput | VibeProfileWhereUniqueInput[]
    update?: VibeProfileUpdateWithWhereUniqueWithoutUserInput | VibeProfileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VibeProfileUpdateManyWithWhereWithoutUserInput | VibeProfileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VibeProfileScalarWhereInput | VibeProfileScalarWhereInput[]
  }

  export type StarredLoglineUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StarredLoglineCreateWithoutUserInput, StarredLoglineUncheckedCreateWithoutUserInput> | StarredLoglineCreateWithoutUserInput[] | StarredLoglineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StarredLoglineCreateOrConnectWithoutUserInput | StarredLoglineCreateOrConnectWithoutUserInput[]
    upsert?: StarredLoglineUpsertWithWhereUniqueWithoutUserInput | StarredLoglineUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StarredLoglineCreateManyUserInputEnvelope
    set?: StarredLoglineWhereUniqueInput | StarredLoglineWhereUniqueInput[]
    disconnect?: StarredLoglineWhereUniqueInput | StarredLoglineWhereUniqueInput[]
    delete?: StarredLoglineWhereUniqueInput | StarredLoglineWhereUniqueInput[]
    connect?: StarredLoglineWhereUniqueInput | StarredLoglineWhereUniqueInput[]
    update?: StarredLoglineUpdateWithWhereUniqueWithoutUserInput | StarredLoglineUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StarredLoglineUpdateManyWithWhereWithoutUserInput | StarredLoglineUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StarredLoglineScalarWhereInput | StarredLoglineScalarWhereInput[]
  }

  export type StarredThemeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StarredThemeCreateWithoutUserInput, StarredThemeUncheckedCreateWithoutUserInput> | StarredThemeCreateWithoutUserInput[] | StarredThemeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StarredThemeCreateOrConnectWithoutUserInput | StarredThemeCreateOrConnectWithoutUserInput[]
    upsert?: StarredThemeUpsertWithWhereUniqueWithoutUserInput | StarredThemeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StarredThemeCreateManyUserInputEnvelope
    set?: StarredThemeWhereUniqueInput | StarredThemeWhereUniqueInput[]
    disconnect?: StarredThemeWhereUniqueInput | StarredThemeWhereUniqueInput[]
    delete?: StarredThemeWhereUniqueInput | StarredThemeWhereUniqueInput[]
    connect?: StarredThemeWhereUniqueInput | StarredThemeWhereUniqueInput[]
    update?: StarredThemeUpdateWithWhereUniqueWithoutUserInput | StarredThemeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StarredThemeUpdateManyWithWhereWithoutUserInput | StarredThemeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StarredThemeScalarWhereInput | StarredThemeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutStarredLoglinesInput = {
    create?: XOR<UserCreateWithoutStarredLoglinesInput, UserUncheckedCreateWithoutStarredLoglinesInput>
    connectOrCreate?: UserCreateOrConnectWithoutStarredLoglinesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutStarredLoglinesNestedInput = {
    create?: XOR<UserCreateWithoutStarredLoglinesInput, UserUncheckedCreateWithoutStarredLoglinesInput>
    connectOrCreate?: UserCreateOrConnectWithoutStarredLoglinesInput
    upsert?: UserUpsertWithoutStarredLoglinesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStarredLoglinesInput, UserUpdateWithoutStarredLoglinesInput>, UserUncheckedUpdateWithoutStarredLoglinesInput>
  }

  export type UserCreateNestedOneWithoutStarredThemesInput = {
    create?: XOR<UserCreateWithoutStarredThemesInput, UserUncheckedCreateWithoutStarredThemesInput>
    connectOrCreate?: UserCreateOrConnectWithoutStarredThemesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutStarredThemesNestedInput = {
    create?: XOR<UserCreateWithoutStarredThemesInput, UserUncheckedCreateWithoutStarredThemesInput>
    connectOrCreate?: UserCreateOrConnectWithoutStarredThemesInput
    upsert?: UserUpsertWithoutStarredThemesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStarredThemesInput, UserUpdateWithoutStarredThemesInput>, UserUncheckedUpdateWithoutStarredThemesInput>
  }

  export type UserCreateNestedOneWithoutVibeProfilesInput = {
    create?: XOR<UserCreateWithoutVibeProfilesInput, UserUncheckedCreateWithoutVibeProfilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVibeProfilesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutVibeProfilesNestedInput = {
    create?: XOR<UserCreateWithoutVibeProfilesInput, UserUncheckedCreateWithoutVibeProfilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVibeProfilesInput
    upsert?: UserUpsertWithoutVibeProfilesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVibeProfilesInput, UserUpdateWithoutVibeProfilesInput>, UserUncheckedUpdateWithoutVibeProfilesInput>
  }

  export type UserCreateNestedOneWithoutProblemGenerationsInput = {
    create?: XOR<UserCreateWithoutProblemGenerationsInput, UserUncheckedCreateWithoutProblemGenerationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProblemGenerationsInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutProblemGenerationsNestedInput = {
    create?: XOR<UserCreateWithoutProblemGenerationsInput, UserUncheckedCreateWithoutProblemGenerationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProblemGenerationsInput
    upsert?: UserUpsertWithoutProblemGenerationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProblemGenerationsInput, UserUpdateWithoutProblemGenerationsInput>, UserUncheckedUpdateWithoutProblemGenerationsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    problemGenerations?: ProblemGenerationCreateNestedManyWithoutUserInput
    vibeProfiles?: VibeProfileCreateNestedManyWithoutUserInput
    starredLoglines?: StarredLoglineCreateNestedManyWithoutUserInput
    starredThemes?: StarredThemeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    problemGenerations?: ProblemGenerationUncheckedCreateNestedManyWithoutUserInput
    vibeProfiles?: VibeProfileUncheckedCreateNestedManyWithoutUserInput
    starredLoglines?: StarredLoglineUncheckedCreateNestedManyWithoutUserInput
    starredThemes?: StarredThemeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    problemGenerations?: ProblemGenerationUpdateManyWithoutUserNestedInput
    vibeProfiles?: VibeProfileUpdateManyWithoutUserNestedInput
    starredLoglines?: StarredLoglineUpdateManyWithoutUserNestedInput
    starredThemes?: StarredThemeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    problemGenerations?: ProblemGenerationUncheckedUpdateManyWithoutUserNestedInput
    vibeProfiles?: VibeProfileUncheckedUpdateManyWithoutUserNestedInput
    starredLoglines?: StarredLoglineUncheckedUpdateManyWithoutUserNestedInput
    starredThemes?: StarredThemeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    problemGenerations?: ProblemGenerationCreateNestedManyWithoutUserInput
    vibeProfiles?: VibeProfileCreateNestedManyWithoutUserInput
    starredLoglines?: StarredLoglineCreateNestedManyWithoutUserInput
    starredThemes?: StarredThemeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    problemGenerations?: ProblemGenerationUncheckedCreateNestedManyWithoutUserInput
    vibeProfiles?: VibeProfileUncheckedCreateNestedManyWithoutUserInput
    starredLoglines?: StarredLoglineUncheckedCreateNestedManyWithoutUserInput
    starredThemes?: StarredThemeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    problemGenerations?: ProblemGenerationUpdateManyWithoutUserNestedInput
    vibeProfiles?: VibeProfileUpdateManyWithoutUserNestedInput
    starredLoglines?: StarredLoglineUpdateManyWithoutUserNestedInput
    starredThemes?: StarredThemeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    problemGenerations?: ProblemGenerationUncheckedUpdateManyWithoutUserNestedInput
    vibeProfiles?: VibeProfileUncheckedUpdateManyWithoutUserNestedInput
    starredLoglines?: StarredLoglineUncheckedUpdateManyWithoutUserNestedInput
    starredThemes?: StarredThemeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProblemGenerationCreateWithoutUserInput = {
    id?: string
    title?: string
    currentStep?: number
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    theme?: string | null
    vibeProfile?: NullableJsonNullValueInput | InputJsonValue
    selectedLogline?: NullableJsonNullValueInput | InputJsonValue
    narrative?: string | null
    selectedAlgorithms?: NullableJsonNullValueInput | InputJsonValue
    problemProposal?: NullableJsonNullValueInput | InputJsonValue
    formalizedProblem?: NullableJsonNullValueInput | InputJsonValue
    technicalOutline?: string | null
    solutionCode?: string | null
    testGenerator?: string | null
  }

  export type ProblemGenerationUncheckedCreateWithoutUserInput = {
    id?: string
    title?: string
    currentStep?: number
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    theme?: string | null
    vibeProfile?: NullableJsonNullValueInput | InputJsonValue
    selectedLogline?: NullableJsonNullValueInput | InputJsonValue
    narrative?: string | null
    selectedAlgorithms?: NullableJsonNullValueInput | InputJsonValue
    problemProposal?: NullableJsonNullValueInput | InputJsonValue
    formalizedProblem?: NullableJsonNullValueInput | InputJsonValue
    technicalOutline?: string | null
    solutionCode?: string | null
    testGenerator?: string | null
  }

  export type ProblemGenerationCreateOrConnectWithoutUserInput = {
    where: ProblemGenerationWhereUniqueInput
    create: XOR<ProblemGenerationCreateWithoutUserInput, ProblemGenerationUncheckedCreateWithoutUserInput>
  }

  export type ProblemGenerationCreateManyUserInputEnvelope = {
    data: ProblemGenerationCreateManyUserInput | ProblemGenerationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VibeProfileCreateWithoutUserInput = {
    id?: string
    vibeProfile: JsonNullValueInput | InputJsonValue
  }

  export type VibeProfileUncheckedCreateWithoutUserInput = {
    id?: string
    vibeProfile: JsonNullValueInput | InputJsonValue
  }

  export type VibeProfileCreateOrConnectWithoutUserInput = {
    where: VibeProfileWhereUniqueInput
    create: XOR<VibeProfileCreateWithoutUserInput, VibeProfileUncheckedCreateWithoutUserInput>
  }

  export type VibeProfileCreateManyUserInputEnvelope = {
    data: VibeProfileCreateManyUserInput | VibeProfileCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StarredLoglineCreateWithoutUserInput = {
    id?: string
    logline: JsonNullValueInput | InputJsonValue
  }

  export type StarredLoglineUncheckedCreateWithoutUserInput = {
    id?: string
    logline: JsonNullValueInput | InputJsonValue
  }

  export type StarredLoglineCreateOrConnectWithoutUserInput = {
    where: StarredLoglineWhereUniqueInput
    create: XOR<StarredLoglineCreateWithoutUserInput, StarredLoglineUncheckedCreateWithoutUserInput>
  }

  export type StarredLoglineCreateManyUserInputEnvelope = {
    data: StarredLoglineCreateManyUserInput | StarredLoglineCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StarredThemeCreateWithoutUserInput = {
    id?: string
    theme: string
  }

  export type StarredThemeUncheckedCreateWithoutUserInput = {
    id?: string
    theme: string
  }

  export type StarredThemeCreateOrConnectWithoutUserInput = {
    where: StarredThemeWhereUniqueInput
    create: XOR<StarredThemeCreateWithoutUserInput, StarredThemeUncheckedCreateWithoutUserInput>
  }

  export type StarredThemeCreateManyUserInputEnvelope = {
    data: StarredThemeCreateManyUserInput | StarredThemeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type ProblemGenerationUpsertWithWhereUniqueWithoutUserInput = {
    where: ProblemGenerationWhereUniqueInput
    update: XOR<ProblemGenerationUpdateWithoutUserInput, ProblemGenerationUncheckedUpdateWithoutUserInput>
    create: XOR<ProblemGenerationCreateWithoutUserInput, ProblemGenerationUncheckedCreateWithoutUserInput>
  }

  export type ProblemGenerationUpdateWithWhereUniqueWithoutUserInput = {
    where: ProblemGenerationWhereUniqueInput
    data: XOR<ProblemGenerationUpdateWithoutUserInput, ProblemGenerationUncheckedUpdateWithoutUserInput>
  }

  export type ProblemGenerationUpdateManyWithWhereWithoutUserInput = {
    where: ProblemGenerationScalarWhereInput
    data: XOR<ProblemGenerationUpdateManyMutationInput, ProblemGenerationUncheckedUpdateManyWithoutUserInput>
  }

  export type ProblemGenerationScalarWhereInput = {
    AND?: ProblemGenerationScalarWhereInput | ProblemGenerationScalarWhereInput[]
    OR?: ProblemGenerationScalarWhereInput[]
    NOT?: ProblemGenerationScalarWhereInput | ProblemGenerationScalarWhereInput[]
    id?: StringFilter<"ProblemGeneration"> | string
    userId?: StringFilter<"ProblemGeneration"> | string
    title?: StringFilter<"ProblemGeneration"> | string
    currentStep?: IntFilter<"ProblemGeneration"> | number
    isCompleted?: BoolFilter<"ProblemGeneration"> | boolean
    createdAt?: DateTimeFilter<"ProblemGeneration"> | Date | string
    updatedAt?: DateTimeFilter<"ProblemGeneration"> | Date | string
    theme?: StringNullableFilter<"ProblemGeneration"> | string | null
    vibeProfile?: JsonNullableFilter<"ProblemGeneration">
    selectedLogline?: JsonNullableFilter<"ProblemGeneration">
    narrative?: StringNullableFilter<"ProblemGeneration"> | string | null
    selectedAlgorithms?: JsonNullableFilter<"ProblemGeneration">
    problemProposal?: JsonNullableFilter<"ProblemGeneration">
    formalizedProblem?: JsonNullableFilter<"ProblemGeneration">
    technicalOutline?: StringNullableFilter<"ProblemGeneration"> | string | null
    solutionCode?: StringNullableFilter<"ProblemGeneration"> | string | null
    testGenerator?: StringNullableFilter<"ProblemGeneration"> | string | null
  }

  export type VibeProfileUpsertWithWhereUniqueWithoutUserInput = {
    where: VibeProfileWhereUniqueInput
    update: XOR<VibeProfileUpdateWithoutUserInput, VibeProfileUncheckedUpdateWithoutUserInput>
    create: XOR<VibeProfileCreateWithoutUserInput, VibeProfileUncheckedCreateWithoutUserInput>
  }

  export type VibeProfileUpdateWithWhereUniqueWithoutUserInput = {
    where: VibeProfileWhereUniqueInput
    data: XOR<VibeProfileUpdateWithoutUserInput, VibeProfileUncheckedUpdateWithoutUserInput>
  }

  export type VibeProfileUpdateManyWithWhereWithoutUserInput = {
    where: VibeProfileScalarWhereInput
    data: XOR<VibeProfileUpdateManyMutationInput, VibeProfileUncheckedUpdateManyWithoutUserInput>
  }

  export type VibeProfileScalarWhereInput = {
    AND?: VibeProfileScalarWhereInput | VibeProfileScalarWhereInput[]
    OR?: VibeProfileScalarWhereInput[]
    NOT?: VibeProfileScalarWhereInput | VibeProfileScalarWhereInput[]
    id?: StringFilter<"VibeProfile"> | string
    userId?: StringFilter<"VibeProfile"> | string
    vibeProfile?: JsonFilter<"VibeProfile">
  }

  export type StarredLoglineUpsertWithWhereUniqueWithoutUserInput = {
    where: StarredLoglineWhereUniqueInput
    update: XOR<StarredLoglineUpdateWithoutUserInput, StarredLoglineUncheckedUpdateWithoutUserInput>
    create: XOR<StarredLoglineCreateWithoutUserInput, StarredLoglineUncheckedCreateWithoutUserInput>
  }

  export type StarredLoglineUpdateWithWhereUniqueWithoutUserInput = {
    where: StarredLoglineWhereUniqueInput
    data: XOR<StarredLoglineUpdateWithoutUserInput, StarredLoglineUncheckedUpdateWithoutUserInput>
  }

  export type StarredLoglineUpdateManyWithWhereWithoutUserInput = {
    where: StarredLoglineScalarWhereInput
    data: XOR<StarredLoglineUpdateManyMutationInput, StarredLoglineUncheckedUpdateManyWithoutUserInput>
  }

  export type StarredLoglineScalarWhereInput = {
    AND?: StarredLoglineScalarWhereInput | StarredLoglineScalarWhereInput[]
    OR?: StarredLoglineScalarWhereInput[]
    NOT?: StarredLoglineScalarWhereInput | StarredLoglineScalarWhereInput[]
    id?: StringFilter<"StarredLogline"> | string
    userId?: StringFilter<"StarredLogline"> | string
    logline?: JsonFilter<"StarredLogline">
  }

  export type StarredThemeUpsertWithWhereUniqueWithoutUserInput = {
    where: StarredThemeWhereUniqueInput
    update: XOR<StarredThemeUpdateWithoutUserInput, StarredThemeUncheckedUpdateWithoutUserInput>
    create: XOR<StarredThemeCreateWithoutUserInput, StarredThemeUncheckedCreateWithoutUserInput>
  }

  export type StarredThemeUpdateWithWhereUniqueWithoutUserInput = {
    where: StarredThemeWhereUniqueInput
    data: XOR<StarredThemeUpdateWithoutUserInput, StarredThemeUncheckedUpdateWithoutUserInput>
  }

  export type StarredThemeUpdateManyWithWhereWithoutUserInput = {
    where: StarredThemeScalarWhereInput
    data: XOR<StarredThemeUpdateManyMutationInput, StarredThemeUncheckedUpdateManyWithoutUserInput>
  }

  export type StarredThemeScalarWhereInput = {
    AND?: StarredThemeScalarWhereInput | StarredThemeScalarWhereInput[]
    OR?: StarredThemeScalarWhereInput[]
    NOT?: StarredThemeScalarWhereInput | StarredThemeScalarWhereInput[]
    id?: StringFilter<"StarredTheme"> | string
    userId?: StringFilter<"StarredTheme"> | string
    theme?: StringFilter<"StarredTheme"> | string
  }

  export type UserCreateWithoutStarredLoglinesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    problemGenerations?: ProblemGenerationCreateNestedManyWithoutUserInput
    vibeProfiles?: VibeProfileCreateNestedManyWithoutUserInput
    starredThemes?: StarredThemeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStarredLoglinesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    problemGenerations?: ProblemGenerationUncheckedCreateNestedManyWithoutUserInput
    vibeProfiles?: VibeProfileUncheckedCreateNestedManyWithoutUserInput
    starredThemes?: StarredThemeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStarredLoglinesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStarredLoglinesInput, UserUncheckedCreateWithoutStarredLoglinesInput>
  }

  export type UserUpsertWithoutStarredLoglinesInput = {
    update: XOR<UserUpdateWithoutStarredLoglinesInput, UserUncheckedUpdateWithoutStarredLoglinesInput>
    create: XOR<UserCreateWithoutStarredLoglinesInput, UserUncheckedCreateWithoutStarredLoglinesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStarredLoglinesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStarredLoglinesInput, UserUncheckedUpdateWithoutStarredLoglinesInput>
  }

  export type UserUpdateWithoutStarredLoglinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    problemGenerations?: ProblemGenerationUpdateManyWithoutUserNestedInput
    vibeProfiles?: VibeProfileUpdateManyWithoutUserNestedInput
    starredThemes?: StarredThemeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStarredLoglinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    problemGenerations?: ProblemGenerationUncheckedUpdateManyWithoutUserNestedInput
    vibeProfiles?: VibeProfileUncheckedUpdateManyWithoutUserNestedInput
    starredThemes?: StarredThemeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutStarredThemesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    problemGenerations?: ProblemGenerationCreateNestedManyWithoutUserInput
    vibeProfiles?: VibeProfileCreateNestedManyWithoutUserInput
    starredLoglines?: StarredLoglineCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStarredThemesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    problemGenerations?: ProblemGenerationUncheckedCreateNestedManyWithoutUserInput
    vibeProfiles?: VibeProfileUncheckedCreateNestedManyWithoutUserInput
    starredLoglines?: StarredLoglineUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStarredThemesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStarredThemesInput, UserUncheckedCreateWithoutStarredThemesInput>
  }

  export type UserUpsertWithoutStarredThemesInput = {
    update: XOR<UserUpdateWithoutStarredThemesInput, UserUncheckedUpdateWithoutStarredThemesInput>
    create: XOR<UserCreateWithoutStarredThemesInput, UserUncheckedCreateWithoutStarredThemesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStarredThemesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStarredThemesInput, UserUncheckedUpdateWithoutStarredThemesInput>
  }

  export type UserUpdateWithoutStarredThemesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    problemGenerations?: ProblemGenerationUpdateManyWithoutUserNestedInput
    vibeProfiles?: VibeProfileUpdateManyWithoutUserNestedInput
    starredLoglines?: StarredLoglineUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStarredThemesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    problemGenerations?: ProblemGenerationUncheckedUpdateManyWithoutUserNestedInput
    vibeProfiles?: VibeProfileUncheckedUpdateManyWithoutUserNestedInput
    starredLoglines?: StarredLoglineUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutVibeProfilesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    problemGenerations?: ProblemGenerationCreateNestedManyWithoutUserInput
    starredLoglines?: StarredLoglineCreateNestedManyWithoutUserInput
    starredThemes?: StarredThemeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVibeProfilesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    problemGenerations?: ProblemGenerationUncheckedCreateNestedManyWithoutUserInput
    starredLoglines?: StarredLoglineUncheckedCreateNestedManyWithoutUserInput
    starredThemes?: StarredThemeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVibeProfilesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVibeProfilesInput, UserUncheckedCreateWithoutVibeProfilesInput>
  }

  export type UserUpsertWithoutVibeProfilesInput = {
    update: XOR<UserUpdateWithoutVibeProfilesInput, UserUncheckedUpdateWithoutVibeProfilesInput>
    create: XOR<UserCreateWithoutVibeProfilesInput, UserUncheckedCreateWithoutVibeProfilesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVibeProfilesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVibeProfilesInput, UserUncheckedUpdateWithoutVibeProfilesInput>
  }

  export type UserUpdateWithoutVibeProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    problemGenerations?: ProblemGenerationUpdateManyWithoutUserNestedInput
    starredLoglines?: StarredLoglineUpdateManyWithoutUserNestedInput
    starredThemes?: StarredThemeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVibeProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    problemGenerations?: ProblemGenerationUncheckedUpdateManyWithoutUserNestedInput
    starredLoglines?: StarredLoglineUncheckedUpdateManyWithoutUserNestedInput
    starredThemes?: StarredThemeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutProblemGenerationsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    vibeProfiles?: VibeProfileCreateNestedManyWithoutUserInput
    starredLoglines?: StarredLoglineCreateNestedManyWithoutUserInput
    starredThemes?: StarredThemeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProblemGenerationsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    vibeProfiles?: VibeProfileUncheckedCreateNestedManyWithoutUserInput
    starredLoglines?: StarredLoglineUncheckedCreateNestedManyWithoutUserInput
    starredThemes?: StarredThemeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProblemGenerationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProblemGenerationsInput, UserUncheckedCreateWithoutProblemGenerationsInput>
  }

  export type UserUpsertWithoutProblemGenerationsInput = {
    update: XOR<UserUpdateWithoutProblemGenerationsInput, UserUncheckedUpdateWithoutProblemGenerationsInput>
    create: XOR<UserCreateWithoutProblemGenerationsInput, UserUncheckedCreateWithoutProblemGenerationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProblemGenerationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProblemGenerationsInput, UserUncheckedUpdateWithoutProblemGenerationsInput>
  }

  export type UserUpdateWithoutProblemGenerationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    vibeProfiles?: VibeProfileUpdateManyWithoutUserNestedInput
    starredLoglines?: StarredLoglineUpdateManyWithoutUserNestedInput
    starredThemes?: StarredThemeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProblemGenerationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    vibeProfiles?: VibeProfileUncheckedUpdateManyWithoutUserNestedInput
    starredLoglines?: StarredLoglineUncheckedUpdateManyWithoutUserNestedInput
    starredThemes?: StarredThemeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type ProblemGenerationCreateManyUserInput = {
    id?: string
    title?: string
    currentStep?: number
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    theme?: string | null
    vibeProfile?: NullableJsonNullValueInput | InputJsonValue
    selectedLogline?: NullableJsonNullValueInput | InputJsonValue
    narrative?: string | null
    selectedAlgorithms?: NullableJsonNullValueInput | InputJsonValue
    problemProposal?: NullableJsonNullValueInput | InputJsonValue
    formalizedProblem?: NullableJsonNullValueInput | InputJsonValue
    technicalOutline?: string | null
    solutionCode?: string | null
    testGenerator?: string | null
  }

  export type VibeProfileCreateManyUserInput = {
    id?: string
    vibeProfile: JsonNullValueInput | InputJsonValue
  }

  export type StarredLoglineCreateManyUserInput = {
    id?: string
    logline: JsonNullValueInput | InputJsonValue
  }

  export type StarredThemeCreateManyUserInput = {
    id?: string
    theme: string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemGenerationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    currentStep?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    vibeProfile?: NullableJsonNullValueInput | InputJsonValue
    selectedLogline?: NullableJsonNullValueInput | InputJsonValue
    narrative?: NullableStringFieldUpdateOperationsInput | string | null
    selectedAlgorithms?: NullableJsonNullValueInput | InputJsonValue
    problemProposal?: NullableJsonNullValueInput | InputJsonValue
    formalizedProblem?: NullableJsonNullValueInput | InputJsonValue
    technicalOutline?: NullableStringFieldUpdateOperationsInput | string | null
    solutionCode?: NullableStringFieldUpdateOperationsInput | string | null
    testGenerator?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProblemGenerationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    currentStep?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    vibeProfile?: NullableJsonNullValueInput | InputJsonValue
    selectedLogline?: NullableJsonNullValueInput | InputJsonValue
    narrative?: NullableStringFieldUpdateOperationsInput | string | null
    selectedAlgorithms?: NullableJsonNullValueInput | InputJsonValue
    problemProposal?: NullableJsonNullValueInput | InputJsonValue
    formalizedProblem?: NullableJsonNullValueInput | InputJsonValue
    technicalOutline?: NullableStringFieldUpdateOperationsInput | string | null
    solutionCode?: NullableStringFieldUpdateOperationsInput | string | null
    testGenerator?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProblemGenerationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    currentStep?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    vibeProfile?: NullableJsonNullValueInput | InputJsonValue
    selectedLogline?: NullableJsonNullValueInput | InputJsonValue
    narrative?: NullableStringFieldUpdateOperationsInput | string | null
    selectedAlgorithms?: NullableJsonNullValueInput | InputJsonValue
    problemProposal?: NullableJsonNullValueInput | InputJsonValue
    formalizedProblem?: NullableJsonNullValueInput | InputJsonValue
    technicalOutline?: NullableStringFieldUpdateOperationsInput | string | null
    solutionCode?: NullableStringFieldUpdateOperationsInput | string | null
    testGenerator?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VibeProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    vibeProfile?: JsonNullValueInput | InputJsonValue
  }

  export type VibeProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    vibeProfile?: JsonNullValueInput | InputJsonValue
  }

  export type VibeProfileUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    vibeProfile?: JsonNullValueInput | InputJsonValue
  }

  export type StarredLoglineUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    logline?: JsonNullValueInput | InputJsonValue
  }

  export type StarredLoglineUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    logline?: JsonNullValueInput | InputJsonValue
  }

  export type StarredLoglineUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    logline?: JsonNullValueInput | InputJsonValue
  }

  export type StarredThemeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
  }

  export type StarredThemeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
  }

  export type StarredThemeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}