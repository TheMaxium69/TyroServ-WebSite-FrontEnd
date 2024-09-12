export interface TexturesInterface {
  type:string, /*base64 or PNG*/
  texture:string,
  slim:boolean|undefined,
  isAnimated:boolean|undefined,
}

/*

     EXEMPLE 1
"type": "base64",
"texture": "ewogICJ0aW1lc3RhbXAiIDogMTcyNjE0ODYwMDkyNywKICAicHJvZmlsZUlkIiA6ICI1MDU4NzRkOGYxNTA0Njg1YWRkMTA0MTQ1M2Y2ZDcxMyIsCiAgInByb2ZpbGVOYW1lIiA6ICJUaGVNYXhpbWVTYW4iLAogICJ0ZXh0dXJlcyIgOiB7CiAgICAiU0tJTiIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNzRlMTVlZTkzMjNhMjI5YjFkYjM3ODVjMjJhOGFiNDE2MzFmOGIwZjczNjkwZDUwNDM3MTYxYmVhNjhjZmExMCIKICAgIH0sCiAgICAiQ0FQRSIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMjM0MGMwZTAzZGQyNGExMWIxNWE4YjMzYzJhN2U5ZTMyYWJiMjA1MWIyNDgxZDBiYTdkZWZkNjM1Y2E3YTkzMyIKICAgIH0KICB9Cn0=",
"slim": "0"

      EXEMPLE 2
"type": "png",
"texture": "ownerCape.png",
"isAnimated": 0



*/
