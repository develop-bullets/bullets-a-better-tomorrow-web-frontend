import type { CSSProperties, PropsWithChildren } from 'react';

/**
 * 주어진 타입의 값 또는 null을 가질 수 있는 타입을 나타냄.
 *
 * 이 유틸리티 타입은 변수, 매개변수, 반환값이 특정 타입이나 null이 될 수 있음을 명시적으로 정의할 때 사용됨.
 * null은 값이 없거나 의도적으로 비어 있는 상태를 나타낼 때 유용함.
 *
 * @template T - null 가능하도록 만들 타입.
 *
 * @example
 * type NullableNumber = Nullable<number>; // number | null
 *
 * const value: NullableNumber = null; // 허용됨
 * const anotherValue: NullableNumber = 123; // 허용됨
 */
export type Nullable<T> = T | null;


/**
 * 주어진 객체 타입 `T`의 모든 속성을 선택적으로 만들고 nullable 값을 허용하는 매핑된 타입을 나타냄.
 *
 * @template T - 키와 해당 타입이 유도되는 객체 타입.
 *
 * `NullableObjectValue` 타입은 주어진 타입 `T`의 모든 속성을 다음과 같이 변환함:
 * - 각 키는 원래 타입의 키와 동일하게 유지됨.
 * - 속성 값은 `null`, 또는 원래 타입 중 하나가 될 수 있음.
 *
 * @example
 * type User = {
 *   name: string;
 *   age: number;
 * };
 *
 * type NullableUser = NullableObjectValue<User>;
 * // {
 * //   name: string | null;
 * //   age: number | null;
 * // }
 */
export type NullableObjectValue<T> = {
  [P in keyof T]: Nullable<T[P]>;
};

/**
 * 주어진 객체 타입 `T`의 모든 속성을 undefined 값을 허용하는 매핑된 타입을 나타냄.
 *
 * @template T - 키와 해당 타입이 유도되는 객체 타입.
 *
 * `UndefinedAbleObjectValue` 타입은 주어진 타입 `T`의 모든 속성을 다음과 같이 변환함:
 * - 각 키는 원래 타입의 키와 동일하게 유지됨.
 * - 속성 값은 `undefined`, 또는 원래 타입 중 하나가 될 수 있음.
 *
 * @example
 * ```typescript
 * type User = {
 *   name: string;
 *   age: number;
 * };
 *
 * type NullableUser = UndefinedAbleObjectValue<User>;
 * // {
 * //   name: string | undefined;
 * //   age: number | undefined;
 * // }
 * ```
 */
export type OptionalAbleObjectValue<T> = {
  [P in keyof T]: Optional<T[P]>;
};

/**
 * 값이 지정된 타입 `T`이거나 `undefined`일 수 있도록 하는 타입 유틸리티.
 *
 * 선택적 속성이나 값이 없음을 `undefined`로 표현할 때 유용하게 사용될 수 있음.
 *
 * @template T `undefined` 외에 할당 가능한 값의 타입.
 *
 * @example
 * ```typescript
 * type OptionalString = Optional<string>;
 * const value: OptionalString = undefined; // 가능
 * const value2: OptionalString = "hello"; // 가능
 * const value3: OptionalString = 42; // 오류 - number는 불가능
 * ```
 */
export type Optional<T> = T | undefined;

/**
 * 컴포넌트의 베이스 프로퍼티
 */
export interface BaseCompProps extends PropsWithChildren {
  /** override classes */
  classes?: string[];
  /** override styles */
  style?: CSSProperties;
}