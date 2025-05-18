          parser={(value: string | undefined): any =>
  parseInt(value?.replace(/,*/g, "") || "0")
}