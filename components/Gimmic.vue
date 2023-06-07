<script></script>

<template>
  <svg
    class="h-[150%] w-[150%]"
    id="Layer_1"
    viewBox="0 0 1000 1000"
    x="0px"
    xml:space="preserve"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    y="0px"
  >
    <!-- Stroke ring -->
    <circle class="st0" cx="500" cy="500" r="302.8">
      <animateTransform
        attributeName="transform"
        attributeType="xml"
        dur="100s"
        from="0 500 500"
        repeatCount="indefinite"
        to="360 500 500"
        type="rotate"
      />
    </circle>
    <!-- Inner ring -->
    <circle class="st1" cx="500" cy="500" r="237.7">
      <animateTransform
        attributeName="transform"
        attributeType="xml"
        dur="40s"
        from="0 500 500"
        repeatCount="indefinite"
        to="360 500 500"
        type="rotate"
      />
    </circle>
    <slot></slot>
    <!-- Outer ring -->
    <circle
      class="st2"
      cx="500"
      cy="500"
      r="366.8"
      transform="rotate(0 500 500)"
    >
      <animateTransform
        attributeName="transform"
        attributeType="xml"
        dur="50s"
        from="0 500 500"
        repeatCount="indefinite"
        to="-360 500 500"
        type="rotate"
      />
    </circle>
    <!-- Outer thin ring -->
    <circle class="st3" cx="500" cy="500" r="385.1" />
  </svg>
</template>

<style lang="postcss" scoped>
.st0,
.st1,
.st2,
.st3 {
  fill: none;
  stroke: var(--md-sys-color-secondary);
  stroke-width: 42;
  stroke-miterlimit: 10;
}

.st0 {
  stroke-dasharray: 12.1947, 12.1947, 12.1947, 12.1947, 12.1947, 12.1947;
}

.st1 {
  stroke-dasharray: 50, 90, 200, 30, 40, 0;
}

.st2 {
  stroke-linecap: square;
  stroke-dasharray: 120, 20, 110, 20, 140;
}

.st3 {
  stroke-width: 16;
  stroke-linecap: square;
}
</style>
