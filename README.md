# Soundhouse で DTM 関連商品を買おうとすると止めてくれる Chrome 拡張

![a2a094b666c9dc47d701467ae195b074](https://user-images.githubusercontent.com/5090244/158006432-127fddfc-44b9-44ed-a527-38b8f9b2bace.gif)


## 使い方

1. https://github.com/minojiro/soundhouse-ayase/ の右の Releases にある項目をクリック
    <img width="438" alt="スクリーンショット 2022-03-13 2 15 21" src="https://user-images.githubusercontent.com/5090244/158027942-0d6fca62-acab-4c2f-b9d5-02db8d0ad578.png">
1. リリースのページにある zip ファイルをダウンロード
    <img width="308" alt="スクリーンショット 2022-03-13 2 14 54" src="https://user-images.githubusercontent.com/5090244/158027940-40e137f6-fc33-4fe9-812f-4d690ac4d11b.png">
1. Chrome ブラウザで、 chrome://extensions/ を開き、右上のデベロッパーモードをオンにして、「パッケージ化されていない拡張機能を読み込む」をクリック、先ほどダウンロードしたディレクトリを開く
    <img width="1327" alt="スクリーンショット 2022-03-13 2 17 04" src="https://user-images.githubusercontent.com/5090244/158027946-af1e98e3-00ab-40cb-9147-f6654f26094f.png">
1. あとは[サウンドハウス](https://www.soundhouse.co.jp/)で安全にお買い物を楽しむだけ！

## 開発

パッケージマネージャーに [pnpm](https://github.com/pnpm/pnpm) を使っています。

```
pnpm install
pnpm dev
```

書き出された `dist` ディレクトリを、上の [使い方](#使い方) と同じ要領で Chrome ブラウザに読み込むと、動作が確認できます。
