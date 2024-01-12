# 扫一扫, 加速更新!
![Icon](https://github.com/YueChan/Live/assets/10445218/1a0a5b3c-3e3f-4795-bd2f-43595cbd2aac)

fatal: You have not concluded your merge (MERGE_HEAD exists).
Please, commit your changes before you merge.

回答

这个错误通常是因为在合并操作中出现了问题，导致合并没有完成。出现这个错误时，你需要先提交你的更改，然后再进行合并操作。

以下是解决这个问题的步骤：

首先，提交你的更改：

bash
git commit -m "Commit message"
然后，继续进行合并操作：

bash
git merge --continue


可能您将令牌提交到GitHub存储库。如果是这种情况，Github将立即删除令牌。因此您需要将令牌设置为系统中的可变环境。