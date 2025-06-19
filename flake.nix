{
  description = "Deshik's Firebase Studio Dev Environment";

  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-24.11";

  outputs = { self, nixpkgs }: {
    devShells.x86_64-linux.default = nixpkgs.legacyPackages.x86_64-linux.callPackage ./dev.nix {};
  };
}
