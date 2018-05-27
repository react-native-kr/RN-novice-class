1. flex
  - HTML CSS를 따라가지 않고 YOGA Library를 통해 동작
  - 부모 사이즈에 마춰 비율로 동작
  - flex가 0인 경우는 inflexible상태로 width, height값 필요하고 일부 영역 고정으로 가져가며 다른 flex에게는 해당영역만 제외 비율로 가져가게끔 동작
  - flex가 -1인 경우 일반적으로 flex0가 같이 동작하나 공간이 충분치 않다면
  shrink 값 minWidth, minHeight값을 따라간다.
2. flexBasis
  - HTML CSS와 동일 [flex-basis](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis)
  - '10em', '3px', 'auto', 'fill', 'max-content', 'min-content', 'fit-content', 'content'... -> 확인 필요
3. flexGrow
  - HTML CSS와 동일
  [flex-grow](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow)
  - flexShrink와는 반대 성향? 값이 커질수록 다른 컨텐츠들 값이 감소 (타 컨텐츠가 minWidth, minHeight값까지만 반영)
4. flexShrink
  - HTML CSS와 동일 [flex-shrink](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink)
  - number
  - flexGrow와는 반대 성향? 값이 커질수록 다른 컨텐츠들 값이 감소 (타 컨텐츠가 minWidth, minHeight값까지만 반영)
5. flexWrap
  - wrapper 역할지정 (default: 'nowrap')
  - 'nowrap', 'wrap'
6. justifyContent
  - children에 대한 방향성 제시 (default: 'flex-start')
  - 'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'
